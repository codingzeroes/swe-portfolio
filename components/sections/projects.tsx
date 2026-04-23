import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected technical work"
          description="A few projects that best represent my software engineering background."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
            >
              <p className="text-sm font-medium text-cyan-400">{project.tag}</p>
              <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}