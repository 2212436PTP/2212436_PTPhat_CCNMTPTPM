import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CountriesLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Quốc gia</h1>
      <p className="text-gray-500 mb-6">Đang tải danh sách quốc gia...</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Card key={idx}>
            <CardHeader>
              <div className="h-6 w-3/5 bg-gray-200 rounded animate-pulse" />
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
