import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

function validateGuestbookPayload(body: unknown) {
  const payload = body as { name?: unknown; message?: unknown };
  const name = typeof payload?.name === "string" ? payload.name.trim() : "";
  const message =
    typeof payload?.message === "string" ? payload.message.trim() : "";

  if (name.length < 2 || name.length > 50) {
    return { error: "name phải từ 2-50 ký tự" };
  }

  if (message.length < 1 || message.length > 500) {
    return { error: "message phải từ 1-500 ký tự" };
  }

  return { name, message };
}

// GET /api/guestbook — Lấy danh sách tất cả lời nhắn
export async function GET(request: NextRequest) {
  const limitParam = request.nextUrl.searchParams.get("limit");

  if (limitParam === null) {
    return NextResponse.json(guestbookEntries);
  }

  const limit = Number.parseInt(limitParam, 10);
  if (!Number.isInteger(limit) || limit < 1) {
    return NextResponse.json(
      { error: "limit phải là số nguyên dương" },
      { status: 400 },
    );
  }

  return NextResponse.json(guestbookEntries.slice(0, limit));
}

// POST /api/guestbook — Thêm lời nhắn mới
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validated = validateGuestbookPayload(body);

  if ("error" in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  // Tạo entry mới
  const newEntry = {
    id: Date.now().toString(),
    name: validated.name,
    message: validated.message,
    createdAt: new Date().toISOString(),
  };
  // Thêm vào đầu mảng (hiển thị mới nhất trước)
  guestbookEntries.unshift(newEntry);
  return NextResponse.json(newEntry, { status: 201 });
}
