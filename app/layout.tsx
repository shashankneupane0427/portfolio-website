import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Surya Shashank Neupane - Full Stack Developer",
  description: "Passionate Full Stack Developer specializing in Next.js, React, TypeScript, and modern web technologies. Building scalable applications with clean code.",
  keywords: "Full Stack Developer, Next.js, React, TypeScript, Web Development, Nepal",
  authors: [{ name: "Surya Shashank Neupane" }],
  creator: "Surya Shashank Neupane",
  openGraph: {
    title: "Surya Shashank Neupane - Full Stack Developer",
    description: "Passionate Full Stack Developer specializing in modern web technologies",
    url: "https://www.suryashashank.com.np",
    siteName: "Surya Shashank Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}