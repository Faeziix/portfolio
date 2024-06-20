import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Galaxy from "@/public/galaxy-min.jpg";
import Image from "next/image";
import styles from "./hero.module.scss";
import Button from "@/components/ui/Button";
import Link from "next/link";

const icons = [
  {
    name: "github",
    icon: <FaGithub />,
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
  },
  {
    name: "linkedin",
    icon: <FaLinkedin />,
  },
];

function Hero() {
  return (
    <div className="flex h-screen justify-center bg-gradient-to-b from-black via-transparent to-black">
      <div className="bg-overlay">
        <Image
          alt="galaxy"
          src={Galaxy}
          className="bg object-fit absolute left-0 top-0 h-[96vh] w-full select-none"
        />
      </div>
      <div className="flex xs:px-10 h-full w-full max-w-7xl flex-col items-center justify-center text-left md:items-start">
        <h1 className="relative md:-left-1 -mb-md text-center font-bold md:text-left">
          <span className={`${styles.neon} ${styles.primary_gradient}`}>
            FAEZ{" "}
          </span>
          <span className={`${styles.neon} ${styles.primary_gradient}`}>
            ANSARI
          </span>
        </h1>
        <h2
          id="title"
          className="relative mt-5 text-left md:text-2xl text-lg font-bold text-cyan-100 text-opacity-70"
        >
          FullStack Developer
        </h2>
        <Link href="#contact">
          <Button className="bg-cyan-800/50 border-2 border-cyan-500/50 text-white backdrop-blur-md">
            GET IN TOUCH
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
