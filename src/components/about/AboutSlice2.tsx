import Image from "next/image";
import React from "react";

const AboutSlice2 = () => {
    return (
        <section className="flex items-center md:gap-x-10 gap-y-10 md:my-28 my-16 flex-col-reverse md:flex-row">
            <div className="w-full text-center md:text-left">
                <h2
                    className="
                text-2xl font-semibold"
                >
                    Collaborations ♻
                </h2>
                <p className="mt-3 text-stone-700 dark:text-stone-500">
                    I have worked with talented teams to create visually stunning websites for
                    businesses and other exciting projects. I am a determined individual who prides
                    myself on my tenacity when it comes to completing tasks.
                </p>
            </div>

            <div className="w-full">
                <Image
                    className="w-full h-full"
                    src="/collaboration.svg"
                    alt="Team Collaboration"
                    width={1000}
                    height={1000}
                />
            </div>
        </section>
    );
};

export default AboutSlice2;
