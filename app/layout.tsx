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
  title: "Raj Pandey — Flutter App Developer",
  description:
    "Flutter app developer building production-ready iOS and Android apps with clean UI, Firebase, REST API integration, testing, and store-ready delivery.",
  keywords: ["Flutter", "Dart", "Mobile App Developer", "iOS", "Android", "Firebase", "REST APIs"],
  authors: [{ name: "Raj Pandey" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Raj Pandey — Flutter App Developer",
    description:
      "Flutter developer focused on production mobile apps, Firebase workflows, REST API integration, and clean app UI for iOS and Android.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
