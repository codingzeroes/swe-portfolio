import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s connect"
          description="Reach out for software engineering opportunities, collaborations, or project discussions."
        />

        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-slate-300">
            Email:{" "}
            <a
              href="mailto:nicholaskiani23@gmail.com"
              className="text-cyan-400 hover:text-cyan-300"
            >
              nicholaskiani23@gmail.com
            </a>
          </p>
          <p className="mt-2 text-slate-300">LinkedIn and GitHub links can go here next.</p>
        </div>
      </Container>
    </section>
  );
}