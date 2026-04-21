import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CountryDetailLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <div className="h-8 w-1/2 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-2/3 bg-gray-200 rounded animate-pulse" />
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-3/5 bg-gray-200 rounded animate-pulse" />
        </CardContent>
      </Card>
    </div>
  );
}
