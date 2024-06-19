import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Galaxy from "@/public/galaxy-min.jpg";
import Image from "next/image";
import styles from "./hero.module.scss";

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
      <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center text-left md:items-start">
        <h1 className="relative -left-1 -mb-md text-center text-7xl font-bold md:text-left">
          <span className={`${styles.neon} ${styles.primary_gradient}`}>
            FAEZ{" "}
          </span>
          <span className={`${styles.neon} ${styles.primary_gradient}`}>
            ANSARI
          </span>
        </h1>
        <h2
          id="title"
          className="relative mt-5 text-left text-2xl font-bold text-cyan-100 text-opacity-70"
        >
          FullStack Developer
        </h2>
      </div>
    </div>
  );
}

export default Hero;
