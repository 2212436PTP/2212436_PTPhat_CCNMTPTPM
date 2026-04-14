import Link from "next/link";
import Counter from "@/src/components/counter";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950 ring-1 ring-emerald-100/80 dark:ring-gray-700 p-8 md:p-12 shadow-xl shadow-emerald-100/60 dark:shadow-none mb-16 motion-safe:animate-[fade-in_450ms_ease-out]">
        <div className="text-center">
          <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/40 rounded-full mx-auto mb-6 flex items-center justify-center ring-4 ring-white dark:ring-gray-800 motion-safe:animate-[float_4s_ease-in-out_infinite]">
            <span className="text-4xl">P</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Xin chào! Tôi là{" "}
            <span className="text-emerald-600">Phan Thành Phát</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-2 max-w-2xl mx-auto leading-relaxed">
            Sinh viên Công nghệ Thông tin tại Đại học Đà Lạt.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            MSSV: 2212436 | Lớp: CTK46. Định hướng phát triển Full-Stack Web
            Developer.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition-all duration-300 hover:scale-[1.02]"
            >
              Xem dự án
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02]"
            >
              Liên hệ
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 tracking-tight">
          Kỹ năng thực tế
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "Git & GitHub",
            "REST API",
            "Responsive UI",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-300 motion-safe:hover:-translate-y-1 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-100/60 dark:hover:shadow-none"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16 bg-white dark:bg-gray-800 rounded-2xl p-8 ring-1 ring-gray-200 dark:ring-gray-700 text-center motion-safe:animate-[fade-in_600ms_ease-out]">
        <h2 className="text-2xl font-bold mb-3">Counter Demo</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Thử tăng/giảm để kiểm tra state client component.
        </p>
        <div className="flex justify-center">
          <Counter />
        </div>
      </div>

      <div className="bg-emerald-50 dark:bg-gray-800 rounded-2xl p-8 text-center ring-1 ring-emerald-200/60 dark:ring-gray-700 motion-safe:animate-[fade-in_700ms_ease-out]">
        <h2 className="text-2xl font-bold mb-3">Đọc blog của tôi</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          Chia sẻ kiến thức và kinh nghiệm về lập trình, công nghệ và học tập.
        </p>
        <Link
          href="/blog"
          className="text-emerald-700 dark:text-emerald-300 font-semibold hover:underline underline-offset-4"
        >
          Xem blog &rarr;
        </Link>
      </div>
    </div>
  );
}
