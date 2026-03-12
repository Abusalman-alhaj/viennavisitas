import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center px-6">
      <h1 className="text-5xl">404</h1>
      <p className="text-muted-foreground">Page not found.</p>
      <Link href="/" className="text-primary underline underline-offset-4 hover:opacity-80">
        Return home
      </Link>
    </div>
  );
}
