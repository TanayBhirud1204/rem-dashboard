import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REM Portfolio Dashboard",
  description: "A beautiful Next.js portfolio dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`} suppressHydrationWarning>
        <main className="flex-1 w-full relative">
          <div className="max-w-6xl mx-auto px-6">
            {children}
          </div>
        </main>
        <footer className="w-full py-8 text-center text-[#A3A3A3] text-sm font-medium italic border-t border-[#D8D8D8]">
          made chaotically by om and tanay ✨
        </footer>
      </body>
    </html>
  );
}
