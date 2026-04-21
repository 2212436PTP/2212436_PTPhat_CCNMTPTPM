import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Giới thiệu</h1>

      <div className="flex items-center gap-4 mb-6">
        <Avatar className="size-14">
          <AvatarFallback className="text-lg">PP</AvatarFallback>
        </Avatar>
        <div className="text-gray-700">
          <p>
            Xin chào! Tôi là <strong>Phan Thành Phát</strong>, sinh viên năm 4
            ngành Công nghệ Thông tin tại Đại học Đà Lạt.
          </p>
          <p>
            MSSV: <strong>2212436</strong> | Lớp: <strong>CTK46</strong>
          </p>
        </div>
      </div>

      <Tabs defaultValue="skills" className="w-full">
        <TabsList>
          <TabsTrigger value="skills">Kỹ năng</TabsTrigger>
          <TabsTrigger value="education">Học vấn</TabsTrigger>
          <TabsTrigger value="goal">Định hướng</TabsTrigger>
        </TabsList>
        <TabsContent value="skills" className="mt-4 text-gray-700">
          <ul className="list-disc list-inside space-y-2">
            <li>JavaScript / TypeScript</li>
            <li>React & Next.JS</li>
            <li>Tailwind CSS</li>
            <li>Git & GitHub</li>
            <li>SQL & PostgreSQL</li>
          </ul>
        </TabsContent>
        <TabsContent value="education" className="mt-4 text-gray-700">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="font-medium">Đại học Đà Lạt</p>
            <p className="text-gray-500">
              Cử nhân Công nghệ Thông tin (2021 — 2025)
            </p>
          </div>
        </TabsContent>
        <TabsContent value="goal" className="mt-4 text-gray-700">
          <p>
            Mục tiêu của tôi là trở thành lập trình viên Full-Stack, xây dựng
            các sản phẩm web có tính ứng dụng cao và trải nghiệm người dùng tốt.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
