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
  title: "Raj Pandey — Mobile App Developer",
  description:
    "I design and ship scalable, high-performance Flutter apps — from idea to App Store, with obsessive attention to motion, performance, and product detail.",
  keywords: ["Flutter", "Mobile Developer", "iOS", "Android", "Firebase", "Supabase"],
  authors: [{ name: "Raj Pandey" }],
  openGraph: {
    title: "Raj Pandey — Mobile App Developer",
    description:
      "Flutter developer specializing in high-performance mobile apps across fintech, health, and creator tooling.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
