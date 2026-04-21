"use client";

import { Button } from "@/components/ui/button";

export default function CountriesError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-2">
        Không thể tải dữ liệu quốc gia
      </h2>
      <p className="text-gray-600 mb-6">{error.message}</p>
      <Button onClick={reset}>Thử lại</Button>
    </div>
  );
}
