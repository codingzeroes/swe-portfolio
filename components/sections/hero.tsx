import Container from "@/components/ui/container";
import ButtonLink from "@/components/ui/button-link";

export default function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Software Engineer
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            I build reliable, polished software with strong systems and product thinking.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            UC Berkeley Computer Science and Economics graduate building projects in
            graphics, compilers, automation, and interactive applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#projects">View Projects</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Contact Me
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}