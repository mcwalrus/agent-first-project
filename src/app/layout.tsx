import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skeleton app",
  description: "Next.js + Prisma + Keycloak starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
