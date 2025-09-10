import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import '@/scss/main.scss';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mauricio Barreiro",
  description: "Mauricio Barreiro - Interactive Front End Developer",
  keywords: ["HTML", "CSS", "XML", "JavaScript", "web", "developer"],
  authors: [{ name: "Mauricio Barreiro" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  // icons: {
  //   icon: "/favicon.ico",
  // },
  metadataBase: new URL("http://mauriciobarreiro.com/"),
  alternates: {
    canonical: "http://mauriciobarreiro.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} someother-class`}>
        <header>
          <h1>Mauricio Barreiro</h1>
        </header>

        <Navigation />

        <main>
          {children}
        </main>

        <footer>
          <p>© 2025 Mauricio Barreiro</p>
        </footer>
      </body>
    </html>
  );
}
