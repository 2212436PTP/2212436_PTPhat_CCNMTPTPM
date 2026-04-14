# Câu trả lời

## 1) Vai trò của `src/app/layout.tsx`

- Đây là **Root Layout** trong Next.js App Router, dùng làm khung chung cho toàn bộ ứng dụng.
- File này định nghĩa cấu trúc gốc gồm thẻ `<html>` và `<body>`, rồi render `{children}` để hiển thị nội dung các trang con.
- Khai báo `metadata` (title, description, keywords, openGraph...) để phục vụ SEO và chia sẻ mạng xã hội.
- Import `globals.css` để áp dụng CSS toàn cục cho toàn project.

## 2) Vai trò của `src/app/page.tsx`

- Đây là trang mặc định cho route `/` (trang chủ).
- Chứa nội dung giao diện chính hiển thị cho người dùng khi truy cập website.
- Trong project này, file đang hiển thị lời chào, thông tin sinh viên, môn học và mục tiêu học tập.

## 3) Kết luận ngắn

- `layout.tsx`: khung dùng chung + metadata + global styles.
- `page.tsx`: nội dung cụ thể của từng route (ở đây là trang chủ `/`).
