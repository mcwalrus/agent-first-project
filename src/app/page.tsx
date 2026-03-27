import Link from "next/link";
import { getServerSession } from "next-auth";
import { appDisplayName } from "@/lib/app-metadata";
import { authOptions } from "@/lib/auth";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <main className="grid min-h-screen grid-cols-[2fr_1fr]">
      <div className="flex flex-col justify-center gap-6 p-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{appDisplayName}</h1>
          <p className="mt-2 text-slate-600">
            Next.js, Prisma, PostgreSQL, Keycloak, and quality gates are wired; add product routes
            on top.
          </p>
        </div>
        {session?.user ? (
          <div className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-800">
              Signed in as{" "}
              <span className="font-medium">{session.user.email ?? session.user.name}</span>
            </p>
            <Link
              href="/api/auth/signout"
              className="text-sm font-medium text-blue-700 underline-offset-4 hover:underline"
            >
              Sign out
            </Link>
          </div>
        ) : (
          <Link
            href="/login"
            className="inline-flex w-fit rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Sign in with Keycloak
          </Link>
        )}
        <p className="text-xs text-slate-500">
          Health check: <Link href="/api/health">/api/health</Link>
        </p>
      </div>
      <div className="min-h-screen bg-transparent" />
    </main>
  );
}
