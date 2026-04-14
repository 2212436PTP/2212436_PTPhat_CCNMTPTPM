import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/src/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link
        href="/projects"
        className="text-emerald-600 hover:underline text-sm mb-6 inline-block"
      >
        &larr; Quay lại danh sách dự án
      </Link>

      <article className="border rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded">
            Năm {project.year}
          </span>
        </div>

        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-700 whitespace-pre-line mb-6">
          {project.content}
        </p>

        <h2 className="text-lg font-semibold mb-3">Công nghệ sử dụng</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
