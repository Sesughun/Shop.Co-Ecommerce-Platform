import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import Header from "./Header";

interface Nav {}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop.Co Online Store",
  description: "Created by Lan Sesughun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
