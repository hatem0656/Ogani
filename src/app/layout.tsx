import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Header from "../components/Header";
import Nav from "@/components/Navigation/Nav";
import FunctionBar from "@/components/Functional/FunctionBar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ogani",
  description: "Buy your food onilne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        <Nav />
        <FunctionBar />
        {children}
      </body>
    </html>
  );
}
