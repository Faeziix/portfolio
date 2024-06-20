import React from "react";
import styles from "./hero.module.scss";
import Button from "@/components/ui/Button";
import Link from "next/link";

function HeroCta() {
  return (
    <div className="flex order-last lg:order-first w-full max-w-xl flex-col items-center justify-center text-left lg:items-start">
      <h1 className="-mb-md text-center font-bold md:-left-1 lg:text-left lg:text-7xl">
        <span className={`${styles.neon} ${styles.primary_gradient}`}>
          FAEZ{" "}
        </span>
        <span className={`${styles.neon} ${styles.primary_gradient}`}>
          ANSARI
        </span>
      </h1>
      <h2
        id="title"
        className="relative mt-5 text-left text-lg font-bold text-cyan-100 text-opacity-70 md:text-2xl"
      >
        FullStack Developer
      </h2>
      <Link href="#contact">
        <Button className="border-2 border-cyan-500/50 bg-cyan-800/50 text-white backdrop-blur-md">
          GET IN TOUCH
        </Button>
      </Link>
    </div>
  );
}

export default HeroCta;
