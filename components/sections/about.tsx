import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export default function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="A portfolio focused on technical depth and execution"
          description="I enjoy building systems that are both technically rigorous and clearly useful, from graphics and compiler projects to automation pipelines and interactive applications."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold">What I care about</h3>
            <p className="mt-3 text-slate-300">
              Clean architecture, debugging carefully, strong fundamentals, and building
              projects that show real engineering judgment.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold">What this site will showcase</h3>
            <p className="mt-3 text-slate-300">
              Selected projects, technical writeups, and at least one interactive demo
              that recruiters can try directly in the browser.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}