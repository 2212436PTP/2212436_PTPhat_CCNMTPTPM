"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Đã xảy ra lỗi</h1>
      <p className="text-gray-600 mb-8">
        Ứng dụng gặp sự cố không mong muốn. Bạn có thể thử lại hoặc quay về
        trang chủ.
      </p>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Thử lại
        </button>
        <Link
          href="/"
          className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
