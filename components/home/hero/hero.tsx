import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Galaxy from "@/public/galaxy.jpg";
import Image from "next/image";
import styles from "./hero.module.scss";

const icons = [
  {
    name: "github",
    icon: <FaGithub className="text-5xl" />,
  },
  {
    name: "instagram",
    icon: <FaInstagram className="text-5xl" />,
  },
  {
    name: "linkedin",
    icon: <FaLinkedin className="text-5xl" />,
  },
];

function Hero() {
  return (
    <div className="h-screen bg-gradient-to-b bg-opacity-20 from-black via-transparent to-black flex items-center flex-col justify-center relative">
      <div className="bg-overlay">
        <Image
          alt="galaxy"
          src={Galaxy}
          className="App bg w-full absolute top-0 left-0 h-full"
        />
      </div>
      <div className="">
        <h1
          id="name"
          className="text-9xl flex flex-col font-bold relative text-center"
        >
          <span className={`${styles.neon} ${styles.primary_gradient}`}>
            AMIRFAEZ
          </span>
          <span className={`${styles.neon} ${styles.primary_gradient}`}>
            ANSARI
          </span>
        </h1>
      </div>
      <h3
        id="title"
        className="text-3xl text-cyan-100 text-opacity-70 mt-5 font-bold relative"
      >
        FullStack Developer
      </h3>
      <div className="flex gap-3 opacity-90">
        {icons.map((icon) => (
          <div
            key={icon.name}
            className={`${styles.social_media} border-solid border-2 border-cyan-100 border-opacity-50 flex items-center justify-center`}
          >
            <span className="text-5xl">{icon.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
