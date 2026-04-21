import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

interface RouteParams {
  params: Promise<{ id: string }>;
}

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

// DELETE /api/guestbook/[id] — Xóa lời nhắn theo id
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);
  if (index === -1) {
    return NextResponse.json(
      { error: "Không tìm thấy lời nhắn" },
      { status: 404 },
    );
  }
  const deleted = guestbookEntries.splice(index, 1)[0];
  return NextResponse.json(deleted);
}

// PUT /api/guestbook/[id] — Cập nhật lời nhắn theo id
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Không tìm thấy lời nhắn" },
      { status: 404 },
    );
  }

  const body = await request.json();
  const validated = validateGuestbookPayload(body);
  if ("error" in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const updated = {
    ...guestbookEntries[index],
    name: validated.name,
    message: validated.message,
  };
  guestbookEntries[index] = updated;

  return NextResponse.json(updated);
}
