import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image'


export const metadata: Metadata = {
  title: "Georgia Pennington",
  description: "Portfolio & projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        <header className="border-b">
          <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-semibold">
              <Image src="/icon.png" alt="GP" width={30}
                height={30} />
            </a>
            <div className="space-x-5 text-sm flex">
              <a href="/projects" className="hover:underline">Projects</a>
              <a href="/about" className="hover:underline">About Me</a>
              <a href="/photography" className="hover:underline">Photography</a>
              <h5 className="bold">|</h5>
              <a href="https://www.linkedin.com/in/georgia-pennington-903823188/">
                <Image src="/icons/linkedin.png" alt="LinkedIn" width={17}
                  height={17} />
              </a>
              <a href="https://github.com/gpenn4">
                <Image src="/icons/GitHub_Logo.png" alt="GitHub" width={42}
                  height={50} />
              </a>
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
