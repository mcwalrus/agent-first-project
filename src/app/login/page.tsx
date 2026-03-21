"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

/** Entry route for sign-in; uses NextAuth's client signIn flow. */
export default function LoginPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center gap-4 p-8">
      <h1 className="text-xl font-semibold">{error ? "Sign in failed" : "Sign in"}</h1>
      <p className="text-sm text-slate-600">
        {error
          ? "Authentication failed. Retry sign-in now that Keycloak is running."
          : "Continue to Keycloak to authenticate."}
      </p>
      <button
        type="button"
        onClick={() => signIn("keycloak", { callbackUrl })}
        className="inline-flex justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
      >
        Sign in with Keycloak
      </button>
      <Link
        href="/"
        className="text-center text-sm text-slate-600 underline-offset-4 hover:underline"
      >
        Back to home
      </Link>
    </main>
  );
}
