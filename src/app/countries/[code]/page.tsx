import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CountryDetail } from "@/src/types/country";

interface CountryDetailPageProps {
  params: Promise<{ code: string }>;
}

async function getCountryDetail(code: string): Promise<CountryDetail> {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${encodeURIComponent(code)}`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Không thể tải thông tin chi tiết quốc gia");
  }

  const data = (await res.json()) as CountryDetail[];
  const country = data[0];

  if (!country) {
    notFound();
  }

  return country;
}

export default async function CountryDetailPage({
  params,
}: CountryDetailPageProps) {
  const { code } = await params;
  const country = await getCountryDetail(code);

  const languageList = Object.values(country.languages ?? {});
  const currencyList = Object.values(country.currencies ?? {}).map(
    (currency) =>
      currency.symbol ? `${currency.name} (${currency.symbol})` : currency.name,
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/countries"
        className="text-blue-600 hover:underline text-sm inline-block mb-6"
      >
        ← Quay lại danh sách quốc gia
      </Link>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 flex-wrap">
            <CardTitle className="text-3xl">{country.name.common}</CardTitle>
            <Badge>{country.cca3}</Badge>
            <Badge variant="secondary">{country.region}</Badge>
          </div>
          <CardDescription>{country.name.official}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {country.flags?.png && (
            <img
              src={country.flags.png}
              alt={country.flags.alt ?? `Cờ ${country.name.common}`}
              className="w-full max-w-md h-56 object-cover rounded-lg border"
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <p>
              <strong>Thủ đô:</strong>{" "}
              {country.capital?.join(", ") ?? "Không có dữ liệu"}
            </p>
            <p>
              <strong>Dân số:</strong>{" "}
              {country.population.toLocaleString("vi-VN")}
            </p>
            <p>
              <strong>Tiểu vùng:</strong>{" "}
              {country.subregion ?? "Không có dữ liệu"}
            </p>
            <p>
              <strong>Diện tích:</strong>{" "}
              {country.area?.toLocaleString("vi-VN") ?? "Không có dữ liệu"} km2
            </p>
            <p>
              <strong>UN Member:</strong> {country.unMember ? "Có" : "Không"}
            </p>
            <p>
              <strong>Giáp biển:</strong> {country.landlocked ? "Không" : "Có"}
            </p>
          </div>

          <Separator />

          <div className="space-y-3">
            <h2 className="font-semibold">Ngôn ngữ</h2>
            <div className="flex flex-wrap gap-2">
              {languageList.length > 0 ? (
                languageList.map((language) => (
                  <Badge key={language} variant="outline">
                    {language}
                  </Badge>
                ))
              ) : (
                <p className="text-sm text-gray-500">Không có dữ liệu</p>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="font-semibold">Tiền tệ</h2>
            <div className="flex flex-wrap gap-2">
              {currencyList.length > 0 ? (
                currencyList.map((currency) => (
                  <Badge key={currency} variant="outline">
                    {currency}
                  </Badge>
                ))
              ) : (
                <p className="text-sm text-gray-500">Không có dữ liệu</p>
              )}
            </div>
          </div>

          {country.maps?.googleMaps && (
            <p className="text-sm">
              <strong>Bản đồ:</strong>{" "}
              <a
                href={country.maps.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Mở Google Maps
              </a>
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
