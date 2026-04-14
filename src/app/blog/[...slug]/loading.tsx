export default function BlogDetailLoading() {
  return (
    <div className="animate-pulse">
      <div className="h-5 w-40 bg-gray-200 rounded mb-8" />

      <article>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-6 w-20 bg-blue-100 rounded" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-32 bg-gray-200 rounded" />
        </div>

        <div className="h-10 w-3/4 bg-gray-200 rounded mb-6" />

        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-11/12 bg-gray-100 rounded" />
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-10/12 bg-gray-100 rounded" />
          <div className="h-4 w-9/12 bg-gray-100 rounded" />
        </div>
      </article>
    </div>
  );
}
