import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://stellawang.netlify.app/"),
  openGraph: {
    images: "./heroImg.png",
    type: "website",
    siteName: "Stella Wang | Portfolio",
    locale: "en_US",
  },
  title: "Stella Wang",
  description: "Personal Portfolio Created by Stella Wang Using Next.js",
  keywords: [
    "Stella Wang",
    "Full Stack Developer",
    "Front End Developer",
    "React Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-stone-300 scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className={`flex flex-col`}></main>
        {children}
        <main />
        <Footer />
      </body>
    </html>
  );
}
