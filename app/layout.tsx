import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/layout/Header";
import { jetbrainsMono } from "./fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Faez Ansari - Portfolio",
  //TODO: add description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} `}>
        <Header />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
