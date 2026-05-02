import Link from "next/link";

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-foreground text-surface hover:opacity-90 dark:bg-white dark:text-slate-950"
      : "border border-line/70 bg-white/60 text-foreground hover:border-accent hover:text-accent dark:bg-slate-950/40";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}
