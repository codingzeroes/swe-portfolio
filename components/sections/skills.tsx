import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

const skillGroups = {
  Languages: ["Python", "C++", "C#", "OCaml", "TypeScript", "SQL"],
  Frameworks: ["Next.js", "React", "Tailwind CSS", "Unity"],
  Tools: ["Git", "Vercel", "OpenGL", "REST APIs"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Core tools and technologies"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skillGroups).map(([group, items]) => (
            <div
              key={group}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
            >
              <h3 className="text-lg font-semibold">{group}</h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}