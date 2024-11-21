import type { Metadata } from "next";
import { Laila, Nunito } from "next/font/google";
import "./globals.css";

const laila = Laila({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-laila",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Algopad",
  description:
    "Algopad is an interactive tool for learning Data Structures and Algorithms (DSA). It connects your phone and computer, letting you use your phone as a trackpad and your computer as a drawing board. This setup helps you practice and understand DSA concepts in a hands-on way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${laila.variable} ${nunito.variable}`}>
        <span id="top" /> {children}
      </body>
    </html>
  );
}
