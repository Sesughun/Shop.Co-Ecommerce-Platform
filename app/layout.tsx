import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";

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
      <body className={inter.className}>
        <div id="header" className="flex">
          <h2 style={{ marginLeft: "25px" }}>SHOP.CO</h2>
          <div>Shop</div>
          <div>On Sale</div>
          <div>New Arrivals</div>
          <div>Brands</div>
          <div></div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
