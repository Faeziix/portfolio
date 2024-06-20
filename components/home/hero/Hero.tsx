import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Galaxy from "@/public/galaxy-min.jpg";
import Image from "next/image";
import { GlobeDemo } from "./globe";
import HeroCta from "./HeroCta";

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
    <div className="bg-overlay bg-gradient-to-b from-black via-transparent flex justify-center to-black">
      <div className="flex mx-10 h-screen items-center lg:justify-evenly justify-center w-full flex-col lg:flex-row">
        <Image
          alt="galaxy"
          src={Galaxy}
          className="bg object-fit absolute left-0 top-0 h-[96vh] w-full select-none"
        />
        <HeroCta />
        <GlobeDemo />
      </div>
    </div>
  );
}

export default Hero;
