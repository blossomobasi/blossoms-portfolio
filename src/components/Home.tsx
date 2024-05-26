"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

import TechStack from "./TechStack";
import SocialIcons from "./SocialIcons";

const Home = () => {
  return (
    <section id="home" className="p-2 md:mb-0 mb-20">
      <div className="flex items-center md:pt-10 gap-x-10 gap-y-5 flex-col-reverse lg:flex-row">
        <div className="text-sm w-full text-center md:text-left">
          <div className="mb-5 text-lg font-medium italic">
            <Typewriter
              words={["Hey There, I'm Blossom 👋🏻", "Lovely meeting you😊"]}
              cursor={true}
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              loop={true}
            />
          </div>
          <h1 className="lg:text-6xl md:text-5xl text-3xl font-extrabold">
            Front-End Developer
          </h1>
          <p className="mt-3 text-stone-700 dark:text-stone-500">
            Hi! I&apos;m{" "}
            <span className="font-semibold text-base text-black dark:text-stone-300">
              Blossom Obasi
            </span>
            , a dedicated and passionate frontend developer based in Lagos,
            Nigeria with a focus on creating delightful and user-friendly web
            experiences.
          </p>
          {/* Social media links */}

          <SocialIcons />
        </div>

        <div className="border-[1rem] border-stone-300 dark:border-stone-700 rounded-full md:w-[55%] h-full -z-10">
          <Image
            src="/images/blossom.jpg"
            alt="Blossom"
            width={500}
            height={500}
            priority
            className="md:h-full sm:h-[23rem] w-full rounded-full contrast-125 aspect-square md:aspect-auto object-cover scale-95"
          />
        </div>
      </div>
      <TechStack />
    </section>
  );
};

export default Home;
