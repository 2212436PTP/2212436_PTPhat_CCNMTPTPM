import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-56 w-56 rounded-full bg-blue-100/70 blur-2xl animate-pulse" />
      </div>

      <div className="mb-6 flex justify-center">
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 rounded-full bg-blue-200 animate-ping" />
          <div className="absolute inset-2 rounded-full bg-blue-500 flex items-center justify-center text-3xl text-white">
            ?
          </div>
        </div>
      </div>

      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Trang không tồn tại</h2>
      <p className="text-gray-600 mb-8">
        Xin lỗi, trang bạn đang tìm kiếm không có trên website này.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
