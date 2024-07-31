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
    <div className={`nav fixed z-30 flex w-full justify-center`}>
      <div
        className={`${transparentBg ? "bg-transparent" : "bg-white/10"} flex w-full items-center justify-end backdrop-blur-lg transition-colors md:hidden md:justify-center`}
      >
        <HamburgerIcon active={hamActive} setActive={setHamActive} />
      </div>
      <div
        className={`${elnath.className} ${transparentBg ? "bg-transparent" : "bg-white/10"} my-4 hidden gap-4 rounded-full p-6 text-lg shadow-lg backdrop-blur-xl transition-colors md:flex`}
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
            className={`fixed left-0 top-0 h-screen w-screen bg-black bg-opacity-90 backdrop-blur-sm`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              easings: "easeOut",
            }}
          >
            <div className="fixed right-2 top-2">
              <HamburgerIcon active={hamActive} setActive={setHamActive} />
            </div>

            <div className="flex h-full grow items-center justify-end">
              <div className="flex h-full w-full flex-col items-center justify-center lg:gap-14 gap-4 text-3xl text-opacity-70">
                {links.map((link, index) => (
                  <Link
                    onClick={() => setHamActive(false)}
                    key={index}
                    className="text-inherit no-underline"
                    href={link.url}
                  >
                    <motion.p
                      className={elnath.className}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{
                        duration: 0.3,
                        easings: "easeInOut",
                        delay: index * 0.1,
                      }}
                    >
                      {link.title}
                    </motion.p>
                  </Link>
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
