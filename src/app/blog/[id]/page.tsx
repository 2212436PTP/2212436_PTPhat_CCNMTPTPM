import Link from "next/link";
import { notFound } from "next/navigation";
import { Post, User } from "@/types/post";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

interface PostComment {
  id: number;
  name: string;
  email: string;
  body: string;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    notFound();
  }
  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  if (!res.ok) {
    throw new Error("Không thể tải thông tin tác giả");
  }
  return res.json();
}

async function getComments(postId: string): Promise<PostComment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  );
  if (!res.ok) {
    throw new Error("Không thể tải bình luận");
  }
  return res.json();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const postPromise = getPost(id);
  const commentsPromise = getComments(id);
  const authorPromise = postPromise.then((post) => getUser(post.userId));
  const [post, comments, author] = await Promise.all([
    postPromise,
    commentsPromise,
    authorPromise,
  ]);

  return (
    <div>
      <Link
        href="/blog"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>
      <article>
        <h1 className="text-3xl font-bold mb-4 capitalize">{post.title}</h1>
        <div className="flex items-center gap-3 mb-6 text-sm text-gray-500">
          <span>
            Tác giả: <strong className="text-gray700">{author.name}</strong>
          </span>
          <span>•</span>
          <span>{author.email}</span>
        </div>
        <div className="prose max-w-none text-gray-700 whitespace-pre-line mb-8 leading-relaxed">
          {post.body}
        </div>

        <div className="border-t pt-6 mb-8">
          <h3 className="font-semibold mb-4">Bình luận ({comments.length})</h3>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="rounded-lg border p-4">
                <p className="font-medium text-gray-800">{comment.name}</p>
                <p className="text-sm text-gray-500 mb-2">{comment.email}</p>
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {comment.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-semibold mb-2">Về tác giả</h3>
          <p className="text-gray-600 text-sm">
            <strong>{author.name}</strong> (@{author.username}) —{" "}
            {author.company.name}
          </p>
          <p className="text-gray-500 text-sm">{author.company.catchPhrase}</p>
        </div>
      </article>
    </div>
  );
}
