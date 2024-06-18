import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import { jetbrainsMono } from "./fonts";
import SmoothScrolling from "@/utils/SmoothScrolling";
import { AnimatePresence } from "framer-motion";
import AnimatePresenceRoot from "@/components/animations/AnimatePresenceRoot";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <SmoothScrolling>
          <AnimatePresenceRoot>
            {children}
          </AnimatePresenceRoot>
        </SmoothScrolling>
      </body>
    </html>
  );
}
