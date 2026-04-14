export interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  tech: string[];
  year: string;
}

export const projects: Project[] = [
  {
    id: "lab01-portfolio",
    title: "Lab 01 - Website Portfolio",
    description:
      "Website portfolio cá nhân xây dựng bằng Next.js và Tailwind CSS",
    content:
      "Dự án tập trung vào việc xây dựng giao diện portfolio hiện đại với App Router, phân trang theo route và tái sử dụng component. Trong quá trình làm, tôi luyện tập cách tổ chức thư mục theo chuẩn Next.js và triển khai giao diện responsive.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    year: "2025",
  },
  {
    id: "quan-ly-thu-vien",
    title: "Đồ án Quản lý Thư viện",
    description:
      "Hệ thống quản lý sách, mượn trả và báo cáo thống kê cho thư viện",
    content:
      "Đồ án nhóm phát triển hệ thống quản lý thư viện có các chức năng quản lý đầu sách, độc giả, phiếu mượn và báo cáo. Tôi phụ trách phần giao diện quản trị và API xử lý nghiệp vụ mượn trả.",
    tech: ["React", "Node.js", "PostgreSQL"],
    year: "2024",
  },
  {
    id: "restful-api-jwt",
    title: "Bài tập API RESTful",
    description: "API quản lý sản phẩm và người dùng với xác thực JWT",
    content:
      "Bài tập xây dựng API theo kiến trúc REST, bao gồm đăng ký, đăng nhập, phân quyền người dùng và CRUD sản phẩm. Dự án giúp tôi hiểu rõ hơn về xác thực JWT, middleware và thiết kế endpoint nhất quán.",
    tech: ["Express", "MongoDB", "JWT"],
    year: "2024",
  },
  {
    id: "mini-blog-app",
    title: "Mini Blog App",
    description: "Ứng dụng blog cho phép tạo, chỉnh sửa và tìm kiếm bài viết",
    content:
      "Ứng dụng blog nhỏ phục vụ việc luyện tập full-stack với tính năng tạo/sửa/xóa bài viết và tìm kiếm theo từ khóa. Tôi sử dụng Prisma để làm việc với cơ sở dữ liệu và tổ chức code theo module.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    year: "2025",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
