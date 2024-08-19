"use client";

import SocialIcons from "@/components/SocialIcons";
import TechStack from "@/components/TechStack";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const HomePage = () => {
    return (
        <section className="p-2 md:mb-0 mb-20 max-w-[110rem] mx-auto">
            <div className="flex items-center md:pt-10 gap-x-10 gap-y-5 flex-col-reverse lg:flex-row sm:py-16 pt-14 pb-20">
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
                        Full-stack Developer
                    </h1>
                    <p className="mt-3 text-stone-700 dark:text-stone-500">
                        Hi! I&apos;m{" "}
                        <span className="font-semibold text-base text-black dark:text-stone-300">
                            Blossom Obasi
                        </span>
                        , a self-taught developer with over a year of experience, I specialize in
                        building dynamic, flexible, and highly functional web applications designed
                        for a seamless user experience.
                    </p>

                    {/* Social media links */}
                    <SocialIcons />
                    <div className="my-5 font-medium text-stone-800 dark:text-stone-400">
                        <a
                            href="https://wa.me/2349039477184"
                            target="_blank"
                            className="uppercase hover:underline flex items-center space-x-3"
                        >
                            <span>Chat me up</span>
                            <span>
                                <FaWhatsapp size={23} />
                            </span>
                        </a>
                    </div>
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

export default HomePage;
