import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

export const elnath = localFont({
  src: "../public/fonts/elnath/ELNATH.otf",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
