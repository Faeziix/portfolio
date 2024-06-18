import ProfessionalPortrait from "@/public/professional-portrait.jpg";
import styles from "./aboutMe.module.scss";
import Image from "next/image";
import Link from "next/link";

function AboutMe() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        <h2 id="about" className="mb-20 scroll-mt-24 text-center">
          About Me
        </h2>
        <div className="flex flex-col items-center justify-between gap-xl lg:flex-row">
          <section
            className={`${styles.body} order-last w-full max-w-prose space-y-4 leading-8 text-stone-300 lg:order-first lg:w-1/2`}
          >
            <p>
              I’m Faez, a Fullstack developer dedicated to building{" "}
              <b>modern</b> and <b>efficient</b> web applications. I am
              dedicated to maximizing <b>productivity</b> by practicing my skills
              and utilizing new tools every day.
            </p>
            <p>
              I love working in <b>collaborative</b> environments and am always
              eager to work with talented teams to improve my skills and
              contribute effectively.
            </p>
            <p>
              If you’re looking for a developer who values quality and
              efficiency, feel free to <Link href="#contact">contact me</Link>.
            </p>
          </section>
          <div className="flex justify-center">
            <div className="h-96 w-96 rounded-full border-2 border-cyan-300">
              <Image
                src={ProfessionalPortrait}
                alt="Professional Portrait"
                className="w-full rounded-full"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
