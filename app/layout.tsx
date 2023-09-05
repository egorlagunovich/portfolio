import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Egor Lagunovich",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="snap-y snap-proximity overflow-y-scroll h-screen duration-300 scroll-smooth">
          {" "}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
