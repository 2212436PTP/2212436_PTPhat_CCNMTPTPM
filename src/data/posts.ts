export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export const posts: Post[] = [
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.js — Framework React phổ biến",
    excerpt:
      "Tìm hiểu vì sao Next.js là lựa chọn hàng đầu cho phát triển web hiện đại.",
    content: `Next.js là một React framework mạnh mẽ được phát triển bởi Vercel. Nó cung cấp nhiều tính năng quan trọng như Server-Side Rendering (SSR), Static Site Generation (SSG) và App Router.

Một số ưu điểm nổi bật của Next.js:
- Routing tự động dựa trên cấu trúc thư mục
- Hỗ trợ Server Components và Client Components
- Tối ưu hóa hình ảnh, font và script tự động
- API Routes tích hợp
- Hỗ trợ TypeScript sẵn có`,
    date: "2025-01-15",
    category: "Công nghệ",
    author: "Phan Thành Phát",
  },
  {
    slug: "hoc-tailwind-css",
    title: "Tailwind CSS — Cách tiếp cận mới cho CSS",
    excerpt:
      "Khám phá phương pháp utility-first CSS và vì sao nó thay đổi cách viết CSS.",
    content: `Tailwind CSS là một utility-first CSS framework, nghĩa là thay vì viết CSS tùy chỉnh, bạn sử dụng các class tiện ích có sẵn để xây dựng giao diện.

Ví dụ, thay vì viết:
.card { padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
Bạn viết trực tiếp trong HTML:
<div class="p-4 rounded-lg shadow-md">...</div>

Ưu điểm:
- Không cần đặt tên class
- Không cần chuyển qua lại giữa file HTML và CSS
- File CSS cuối cùng rất nhỏ (chỉ chứa class đã dùng)`,
    date: "2025-01-20",
    category: "Công nghệ",
    author: "Phan Thành Phát",
  },
  {
    slug: "kinh-nghiem-hoc-lap-trinh",
    title: "Chia sẻ kinh nghiệm tự học lập trình hiệu quả",
    excerpt: "Những bài học rút ra sau 3 năm tự học lập trình ở đại học.",
    content: `Sau 3 năm học tập và thực hành lập trình, tôi rút ra một số kinh nghiệm quan trọng:

1. Thực hành nhiều hơn đọc lý thuyết
Lập trình là kỹ năng thực hành. Đọc sách và xem video chỉ chiếm 30%, 70% còn lại là viết code.

2. Xây dựng dự án thực tế
Không gì tốt hơn việc xây dựng một sản phẩm thực tế để học. Hãy bắt đầu từ những dự án nhỏ và tăng dần độ phức tạp.

3. Tham gia cộng đồng
Tham gia các cộng đồng lập trình để học hỏi và chia sẻ kinh nghiệm.`,
    date: "2025-02-01",
    category: "Học tập",
    author: "Phan Thành Phát",
  },
  {
    slug: "react-query-thuc-chien",
    title: "React Query trong dự án thực chiến",
    excerpt:
      "Cách sử dụng React Query để quản lý trạng thái server hiệu quả hơn.",
    content: `React Query giúp việc gọi API, cache dữ liệu và đồng bộ trạng thái trở nên dễ dàng hơn trong ứng dụng React.

Những điểm nổi bật khi dùng React Query:
- Tự động cache và refetch dữ liệu
- Quản lý loading/error state nhất quán
- Hỗ trợ pagination và infinite query rất tốt

Trong các dự án thực tế, React Query giúp code gọn hơn và giảm đáng kể logic state thủ công.`,
    date: "2025-02-12",
    category: "Công nghệ",
    author: "Phan Thành Phát",
  },
  {
    slug: "kinh-nghiem-lam-do-an-nhom",
    title: "Kinh nghiệm làm đồ án nhóm hiệu quả",
    excerpt: "Một số bài học để phối hợp nhóm tốt hơn khi làm đồ án đại học.",
    content: `Làm đồ án nhóm không chỉ là viết code, mà còn là kỹ năng giao tiếp và quản lý tiến độ.

Một số kinh nghiệm quan trọng:
1. Chia task rõ ràng ngay từ đầu theo năng lực từng thành viên.
2. Có lịch họp cố định hằng tuần để cập nhật tiến độ.
3. Quy ước chung về branch Git, code style và cách review pull request.

Khi nhóm phối hợp tốt, chất lượng sản phẩm và tốc độ hoàn thành đều cải thiện rõ rệt.`,
    date: "2025-03-03",
    category: "Học tập",
    author: "Phan Thành Phát",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
