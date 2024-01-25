"use client";

import { Typewriter } from "react-simple-typewriter";

import Image from "next/image";
import TechStack from "./TechStack";

const Home = () => {
  return (
    <section id="home" className="p-2 md:mb-0 mb-20">
      <div className="flex items-center md:pt-10 gap-x-10 gap-y-5 flex-col-reverse lg:flex-row">
        <div className="text-sm w-full text-center md:text-left">
          <div className="mb-5 text-lg font-medium italic">
            <Typewriter
              words={["Hey There👋🏻", "Lovely meeting you😊"]}
              cursor={true}
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              loop={true}
            />
          </div>
          <h1 className="md:text-5xl text-3xl font-extrabold">
            Front-End React Developer
          </h1>
          <p className="mt-3 text-stone-700">
            Hi! I&apos;m{" "}
            <span className="font-semibold text-base text-black">
              Blossom Obasi
            </span>
            , a dedicated and passionate frontend developer based in Lagos,
            Nigeria with a focus on creating delightful and user-friendly web
            experiences.
          </p>
        </div>

        <div className="relative md:w-[55%] h-full -z-10">
          <Image
            // src="/images/tech-guy.png"
            src="/images/blossom.jpg"
            alt="Tech guy"
            width={500}
            height={500}
            priority
            className="md:h-full h-[23rem] w-full rounded-full"
          />
        </div>
      </div>
      <TechStack />
    </section>
  );
};

export default Home;
