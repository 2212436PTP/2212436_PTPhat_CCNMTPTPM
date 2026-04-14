const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Node.js & Express",
  "SQL / PostgreSQL / MongoDB",
  "Git & GitHub",
  "HTML / CSS / Tailwind CSS",
];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Kỹ năng lập trình</h1>
      <ul className="grid gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-lg border bg-white p-4 text-gray-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
