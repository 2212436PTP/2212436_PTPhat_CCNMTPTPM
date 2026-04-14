export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex gap-8">
        {/* Nội dung chính */}
        <div className="flex-1">{children}</div>

        {/* Sidebar */}
        <aside className="w-64 shrink-0">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Danh mục</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li className="rounded-lg p-2 hover:bg-white dark:hover:bg-gray-700 transition-colors">
                <p className="font-medium text-gray-800 dark:text-gray-100">Công nghệ</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Chia sẻ về Next.js, React, TypeScript, Tailwind CSS và các xu hướng web hiện đại.
                </p>
              </li>
              <li className="rounded-lg p-2 hover:bg-white dark:hover:bg-gray-700 transition-colors">
                <p className="font-medium text-gray-800 dark:text-gray-100">Học tập</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Kinh nghiệm học lập trình, phương pháp tự học và ghi chú môn học ở đại học.
                </p>
              </li>
              <li className="rounded-lg p-2 hover:bg-white dark:hover:bg-gray-700 transition-colors">
                <p className="font-medium text-gray-800 dark:text-gray-100">Dự án cá nhân</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Quá trình xây dựng portfolio, mini app và các bài lab thực hành thực tế.
                </p>
              </li>
              <li className="rounded-lg p-2 hover:bg-white dark:hover:bg-gray-700 transition-colors">
                <p className="font-medium text-gray-800 dark:text-gray-100">Cuộc sống</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Góc nhìn cá nhân về cân bằng học tập, công việc và phát triển bản thân mỗi ngày.
                </p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
