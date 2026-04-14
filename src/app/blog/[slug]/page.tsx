import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/src/data/posts";
import LikeButton from "@/src/components/like-button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Link
        href="/blog"
        className="text-emerald-600 hover:underline text-sm mb-6 inline-block"
      >
        &larr; Quay lại danh sách
      </Link>

      <article>
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded">
            {post.category}
          </span>
          <span className="text-sm text-gray-400">{post.date}</span>
          <span className="text-sm text-gray-500">Tác giả: {post.author}</span>
        </div>

        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

        <div className="prose max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-line mb-8">
          {post.content}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <LikeButton />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
