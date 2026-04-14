import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Phan Thành Phát - Lab 01 | Các Công Nghệ Mới Trong PTPM",
  description:
    "Dự án Lab 01 - Khám phá các công nghệ mới trong phát triển phần mềm (Next.js, TypeScript, React). Sinh viên: Phan Thành Phát (2212436)",
  keywords: ["Next.js", "TypeScript", "React", "PTPM", "Lab"],
  authors: [{ name: "Phan Thành Phát" }],
  openGraph: {
    title: "Phan Thành Phát - Lab 01",
    description: "Dự án học tập về các công nghệ mới trong phát triển phần mềm",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
