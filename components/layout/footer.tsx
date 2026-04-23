import Container from "@/components/ui/container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <Container>
        <p className="text-sm text-slate-400">
          © 2026 Nicholas Kiani. Built with Next.js and Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}