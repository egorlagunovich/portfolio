"use client";

import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Header";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Egor Lagunovich",
  description: "Portfolio of website front-end developer Egor Lagunovich.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <html lang="en">
      <body className="text-white bg-mainBlue">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar
            />
            <main className="h-screen duration-300 snap-y snap-proximity scroll-smooth ">
              {" "}
              {children}
            </main>
          </>
        )}
      </body>
    </html>
  );
}
