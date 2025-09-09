import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image'
import Link from "next/link";


export const metadata: Metadata = {
  title: "Georgia Pennington",
  description: "Portfolio & projects",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60
          pt-[env(safe-area-inset-top)]">
          <nav className="container mx-auto max-w-screen-lg px-4 md:px-6 py-3 flex items-center justify-between">
            {/* <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between sm:flex hidden items-center gap-4"> */}
            <Link href="/" className="shrink-0" aria-label="Home">
              <Image
                src="/icon.png"
                alt="GP"
                width={32}
                height={32}
                sizes="(max-width: 640px) 32px, 32px"
                priority
              />
            </Link>

            {/* Right side links: stack on mobile, inline on md+ */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-4 text-sm">
                <Link href="/projects" className="hover:underline">Projects</Link>
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/photography" className="hover:underline">Photography</Link>
                <span className="text-gray-300" aria-hidden>│</span>
              </div>

              <div className="flex items-center gap-3">
                <Link href="https://www.linkedin.com/in/georgia-pennington-903823188/" aria-label="LinkedIn">
                  <Image
                    src="/icons/linkedin.png"
                    alt=""
                    width={24}
                    height={24}
                    sizes="24px"
                  />
                </Link>
                <Link href="https://github.com/gpenn4" aria-label="GitHub">
                  <Image
                    src="/icons/GitHub_Logo.png"
                    alt=""
                    width={28}
                    height={28}
                    sizes="28px"
                  />
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="mx-auto">{children}</main>
        {/* "mx-auto max-w-6xl px-4 py-10" */}

        <footer className="mx-auto max-w-6xl px-4 py-2 text-sm text-gray-500 border-t">
          © {new Date().getFullYear()} Georgia Pennington
        </footer>

      </body>
    </html>
  );
}
