import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Posts App",
  description: "My first Next.js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-10 bg-teal-700">
          <nav className=" px-6 max-w-4xl mx-auto font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
              <Link
                href="/"
                className="text-2xl no-underline text-gray-100 hover:text-gray-700"
              >
                Home
              </Link>
            </div>
            <div className="flex flex-col items-center sm:flex-row">
              <Link
                href="/posts"
                className="text-lg no-underline text-gray-100 hover:text-gray-700"
              >
                Posts
              </Link>
              <Link
                href="/users"
                className="text-lg no-underline text-gray-100 hover:text-gray-700 sm:ml-4"
              >
                Users
              </Link>
            </div>
          </nav>
        </header>
        <div className="mx-auto px-6 mt-6 max-w-4xl">{children}</div>
      </body>
    </html>
  );
}
