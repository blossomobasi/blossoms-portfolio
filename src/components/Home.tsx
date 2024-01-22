import Image from "next/image";
import TechStack from "./TechStack";

const Home = () => {
  return (
    <section className="p-2 md:mb-0 mb-20">
      <div className="flex items-center pt-10 gap-x-10 flex-col-reverse lg:flex-row">
        <div className="text-sm w-full">
          <p>Hey there 👋🏻</p> {/* Lovely to meet you */}
          <h1 className="md:text-5xl text-3xl font-extrabold">
            Front-End React Developer
          </h1>
          <p className="mt-3 text-stone-700">
            Hi! I&apos;m{" "}
            <span className="font-semibold text-base text-black">
              Obasi Blossom
            </span>
            , a passionate frontend developer based in Lagos, Nigeria with a
            focus on creating delightful and user-friendly web experiences.
          </p>
        </div>

        <div className="relative md:w-1/2 h-full">
          <Image
            src="/images/tech-guy.png"
            alt="Tech guy"
            width={500}
            height={500}
            priority
            className="h-full w-full"
          />
        </div>
      </div>
      <TechStack />
    </section>
  );
};

export default Home;
