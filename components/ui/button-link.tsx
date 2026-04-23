import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
      : "border border-slate-700 text-slate-100 hover:bg-slate-900";

  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}