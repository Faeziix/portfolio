import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Galaxy from "@/public/galaxy.jpg";
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
          className="bg select-none object-fit h-[100vh] absolute left-0 top-0 w-full"
        />
      </div>
      <div className="flex h-full w-full max-w-7xl flex-col items-center md:items-start justify-center text-left">
        <h1 className="relative -left-1 -mb-md text-left text-7xl font-bold">
          <span className={`${styles.neon} ${styles.primary_gradient}`}>
            FAEZ {" "}
          </span>
          <span className={`${styles.neon} ${styles.primary_gradient}`}>
            ANSARI
          </span>
        </h1>
        <h3
          id="title"
          className="relative mt-5 text-left text-2xl font-bold text-cyan-100 text-opacity-70"
        >
          FullStack Developer
        </h3>
        <div className="flex gap-3 opacity-90">
          {icons.map((icon) => (
            <div
              key={icon.name}
              className={`${styles.social_media} h-16 aspect-square flex items-center justify-center border-2 border-solid border-cyan-100 border-opacity-50`}
            >
              <span className="text-5xl">{icon.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
