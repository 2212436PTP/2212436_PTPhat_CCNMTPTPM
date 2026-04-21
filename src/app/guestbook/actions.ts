"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { guestbookEntries } from "@/data/guestbook";

const DUPLICATE_WINDOW_MS = 60 * 1000;

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

// Định nghĩa schema validation cho guestbook
const guestbookSchema = z.object({
  name: z
    .string()
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(50, "Tên không được quá 50 ký tự"),
  message: z
    .string()
    .min(1, "Lời nhắn không được để trống")
    .max(500, "Lời nhắn không được quá 500 ký tự"),
});
export interface ActionState {
  success: boolean;
  errors?: {
    name?: string[];
    message?: string[];
  };
}
export async function createGuestbookEntry(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  // Lấy dữ liệu từ form
  const rawData = {
    name: formData.get("name") as string,
    message: formData.get("message") as string,
  };
  // Validate bằng Zod
  const result = guestbookSchema.safeParse(rawData);
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const normalizedName = normalizeText(result.data.name);
  const normalizedMessage = normalizeText(result.data.message);
  const now = Date.now();

  const isDuplicateInOneMinute = guestbookEntries.some((entry) => {
    const createdAt = new Date(entry.createdAt).getTime();
    if (Number.isNaN(createdAt) || now - createdAt > DUPLICATE_WINDOW_MS) {
      return false;
    }

    return (
      normalizeText(entry.name) === normalizedName &&
      normalizeText(entry.message) === normalizedMessage
    );
  });

  if (isDuplicateInOneMinute) {
    return {
      success: false,
      errors: {
        message: ["Không thể gửi lời nhắn trùng lặp trong vòng 1 phút"],
      },
    };
  }

  // Thêm entry mới vào mảng
  const newEntry = {
    id: Date.now().toString(),
    name: result.data.name,
    message: result.data.message,
    createdAt: new Date().toISOString(),
  };
  guestbookEntries.unshift(newEntry);
  // Revalidate trang guestbook để hiển thị data mới
  revalidatePath("/guestbook");
  return { success: true };
}
export async function deleteGuestbookEntry(id: string): Promise<ActionState> {
  const index = guestbookEntries.findIndex((entry) => entry.id === id);
  if (index === -1) {
    return { success: false, errors: { message: ["Không tìm thấy lời nhắn"] } };
  }
  guestbookEntries.splice(index, 1);
  revalidatePath("/guestbook");
  return { success: true };
}
