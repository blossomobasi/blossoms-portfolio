"use client";

import { Typewriter } from "react-simple-typewriter";

import Image from "next/image";
import TechStack from "./TechStack";
import Icon from "./Icon";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

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
          <h1 className="lg:text-6xl md:text-5xl text-3xl font-extrabold">
            Front-End Developer
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
          <div className="flex md:justify-start justify-center mt-5 gap-3">
            <Icon url="https://github.com/Dev-kami" title="Github">
              <FaGithub />
            </Icon>
            <Icon
              url="https://www.linkedin.com/in/obasi-blossom-07063a25a/"
              title="Linked in"
            >
              <FaLinkedinIn />
            </Icon>
            <Icon url="https://www.instagram.com/iambl0ss0m/" title="Instagram">
              <BsInstagram />
            </Icon>
          </div>
        </div>

        <div className="relative md:w-[55%] h-full -z-10">
          <Image
            // src="/images/blossom.jpg"
            src="/images/fresh-guy.jpg"
            alt="Blossom"
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
