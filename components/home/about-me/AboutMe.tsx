import ProfessionalPortrait from "@/public/professional-portrait.jpg";
import styles from "./aboutMe.module.scss";
import Image from "next/image";
import Link from "next/link";

function AboutMe() {
  return (
    <div className="bg-gradient-to-b from-black">
      <div className="mx-auto max-w-7xl">
        <h2 id="about" className="mb-20 scroll-mt-24 text-center">
          About Me
        </h2>
        <div className="flex flex-col items-center justify-between gap-32 lg:flex-row">
          <section
            className={`${styles.body} order-last w-full max-w-prose space-y-4 leading-8 text-stone-300 lg:order-first lg:w-1/2`}
          >
            <p>
              Hey, I'm Faez, a Frontend web developer passionate about{" "}
              <b>speed</b> and <b>efficiency</b>.{" "}
            </p>
            <p>
              From day one, I've focused on creating <b>user-friendly</b> web
              applications, constantly seeking efficient tools and technologies
              in my workflow to improve my <b>productivity</b>.{" "}
            </p>
            <p>
              I am best in a team environment especially if I am working with
              people who are better than me. That motivates me to improve myself{" "}
              <b>continuously</b>.
            </p>
            <p>
              If you are looking for someone like me, please don't hesitate to {" "}
              <Link href="#contact"> contact me</Link>.
            </p>
          </section>
          <div className="flex justify-center">
            <div className="h-96 w-96 rounded-full border-2 border-cyan-300">
              <Image
                src={ProfessionalPortrait}
                alt="Professional Portrait"
                className="w-full rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
