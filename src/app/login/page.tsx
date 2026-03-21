import Link from "next/link";

/** Convenience route; the app also links to `/api/auth/signin/keycloak` from the home page. */
export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-4 p-8">
      <h1 className="text-xl font-semibold">Sign in</h1>
      <Link
        href="/api/auth/signin/keycloak"
        className="inline-flex justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
      >
        Continue with Keycloak
      </Link>
      <Link
        href="/"
        className="text-center text-sm text-slate-600 underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </main>
  );
}
