export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Xin chào! 👋</h1>
        <p className="text-lg text-gray-700 mb-6 italic">
          Tôi là một sinh viên yêu thích lập trình web và luôn khám phá những
          công nghệ mới để phát triển kỹ năng của mình.
        </p>
        <p className="text-xl text-gray-600 mb-2">
          Họ và tên: <strong>Phan Thành Phát</strong>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          MSSV: <strong>2212436</strong>
        </p>
        <p className="text-xl text-gray-600 mb-6">
          Môn: Các công nghệ mới trong PTPM
        </p>
        <div className="mb-8 w-full max-w-2xl">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              📚 Mục Tiêu Học Tập
            </h2>
            <ul className="text-left text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>
                  Nắm vững các công nghệ hiện đại trong phát triển web như
                  Next.js, React, TypeScript
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>
                  Xây dựng kỹ năng thiết kế và phát triển giao diện người dùng
                  đẹp và responsive
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>
                  Hiểu biết sâu về best practices và patterns trong lập trình
                  hiện đại
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>
                  Tạo các dự án thực tế có thể ứng dụng trong công việc chuyên
                  nghiệp
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-100 rounded-lg p-4">
          <p className="text-blue-800">
            🚀 Đây là project Next.JS đầu tiên của tôi!
          </p>
        </div>
      </div>
    </main>
  );
}
