import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Self Wisdom",
  description: "All your knowledge in a single place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/self-wisdom-logo.png" type="image/png" />
      </head>
      <body
        className={`${inter.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
