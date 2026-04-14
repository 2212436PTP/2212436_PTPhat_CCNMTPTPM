import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Website portfolio cá nhân — CTK46",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            try {
              const savedTheme = localStorage.getItem("theme");
              const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              const shouldDark = savedTheme === "dark" || (savedTheme !== "light" && systemDark);
              document.documentElement.classList.toggle("dark", shouldDark);
            } catch {}
          })();`}
        </Script>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
