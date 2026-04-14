export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Liên hệ</h1>

      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-3">
          <p>
            <strong>Họ và tên:</strong> Phan Thành Phát
          </p>
          <p>
            <strong>MSSV:</strong> 2212436
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:2212436@dlu.edu.vn"
              className="text-emerald-600 hover:underline"
            >
              2212436@dlu.edu.vn
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/2212436PTP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline"
            >
              github.com/2212436PTP
            </a>
          </p>
          <p>
            <strong>Trường:</strong> Đại học Đà Lạt
          </p>
          <p>
            <strong>Địa chỉ:</strong> 01 Phù Đổng Thiên Vương, Đà Lạt
          </p>
        </div>
      </div>
    </div>
  );
}
