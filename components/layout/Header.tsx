"use client";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import { elnath } from "@/app/fonts";

const links = [
  { title: "Home", url: "/" },
  { title: "About", url: "#about" },
  { title: "Skills", url: "#skills" },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" },
];

function Header() {
  const [hamActive, setHamActive] = useState(false);
  const [transparentBg, setTransparentBg] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          setTransparentBg(false);
        } else {
          setTransparentBg(true);
        }
      });
    }
  }, []);

  return (
    <div className={`nav fixed flex justify-center z-30 w-full`}>
      <div className={ `${transparentBg ? "bg-transparent" : "bg-white/5"} z-30 md:hidden backdrop-blur-lg w-full flex items-center justify-end transition-colors md:justify-center` }>
        <HamburgerIcon active={hamActive} setActive={setHamActive} />
      </div>
      <div
        className={`${elnath.className} ${transparentBg ? "bg-transparent" : "bg-white/5"} my-4 hidden md:flex gap-4 rounded-full p-6 text-lg backdrop-blur-lg transition-colors`}
      >
        {links.map((link, index) => (
          <Link
            href={link.url}
            key={index}
            className="m-0 leading-3 text-inherit no-underline"
          >
            {link.title}
          </Link>
        ))}
      </div>

      <AnimatePresence>
        {hamActive && (
          <motion.div
            className={`absolute right-0 top-0 h-screen w-screen bg-black bg-opacity-90 backdrop-blur-sm transition-all duration-1000`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, display: "block" }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              easings: "easeOut",
            }}
          >
            <div className="fixed top-2 right-2">

              <HamburgerIcon
                active={hamActive} setActive={setHamActive} />
            </div>

            <div className="flex h-full grow items-center justify-end">
              <div className="flex h-full w-full flex-col items-center justify-center gap-14 text-5xl text-cyan-300 text-opacity-70">
                {links.map((link, index) => (
                  <motion.p
                    className={elnath.className}
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{
                      duration: 0.4,
                      easings: "easeInOut",
                      delay: index * 0.1,
                    }}
                  >
                    {link.title}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
