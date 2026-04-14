export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-300 text-sm">
        <p>© 2026 — Phan Thành Phát | CTK46 — Các công nghệ mới trong PTPM</p>
        <div className="mt-3 flex items-center justify-center gap-4">
          <a
            href="https://github.com/2212436"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="mailto:2212436@dlu.edu.vn"
            className="text-emerald-600 dark:text-emerald-400 hover:underline underline-offset-4"
          >
            2212436@dlu.edu.vn
          </a>
        </div>
      </div>
    </footer>
  );
}
