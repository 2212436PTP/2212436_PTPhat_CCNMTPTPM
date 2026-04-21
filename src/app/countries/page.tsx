import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CountryListItem } from "@/src/types/country";

async function getCountries(): Promise<CountryListItem[]> {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population,capital",
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error("Không thể tải danh sách quốc gia từ API");
  }

  const data = (await res.json()) as CountryListItem[];
  return data.sort((a, b) => a.name.common.localeCompare(b.name.common, "vi"));
}

export default async function CountriesPage() {
  const countries = await getCountries();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Danh sách quốc gia</h1>
      <p className="text-gray-500 mb-6">
        Tổng cộng {countries.length} quốc gia từ REST Countries API
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map((country) => (
          <Link key={country.cca3} href={`/countries/${country.cca3}`}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle>{country.name.common}</CardTitle>
                  <Badge variant="secondary">{country.region}</Badge>
                </div>
                <CardDescription>{country.name.official}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {country.flags?.png && (
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt ?? `Cờ ${country.name.common}`}
                    className="w-full h-32 object-cover rounded-md border"
                  />
                )}
                <p className="text-sm text-gray-600">
                  Thủ đô: {country.capital?.join(", ") ?? "Không có dữ liệu"}
                </p>
                <p className="text-sm text-gray-600">
                  Dân số: {country.population.toLocaleString("vi-VN")}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
