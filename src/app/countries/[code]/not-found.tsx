import Link from "next/link";

export default function CountryNotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-2">Không tìm thấy quốc gia</h2>
      <p className="text-gray-600 mb-4">
        Mã quốc gia không hợp lệ hoặc không tồn tại trong dữ liệu API.
      </p>
      <Link href="/countries" className="text-blue-600 hover:underline">
        ← Quay lại danh sách quốc gia
      </Link>
    </div>
  );
}
