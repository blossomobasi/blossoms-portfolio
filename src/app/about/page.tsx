// import AboutSlice1 from "@/components/about/AboutSlice1";
// import AboutSlice2 from "@/components/about/AboutSlice2";
// import AboutSlice3 from "@/components/about/AboutSlice3";
// import TextHeader from "@/components/TextHeader";
// import Image from "next/image";

import TextHeader from "@/components/TextHeader";
import AboutSlice1 from "@/components/about/AboutSlice1";
import AboutSlice2 from "@/components/about/AboutSlice2";
import AboutSlice3 from "@/components/about/AboutSlice3";
import Image from "next/image";

const AboutMe = () => {
    const softSkill = [
        {
            title: "Attention to details",
            description:
                "I extensively focus on the finer aspects of every task, ensuring that nothing is overlooked.",
        },
        {
            title: "Adaptability",
            description:
                "I thrive in dynamic environments, quickly adjusting to new challenges and opportunities. Whether it's learning new tools, embracing changes in project direction, or adapting to team needs, I remain flexible and open-minded.",
        },
        {
            title: "Time Management",
            description:
                "I excel at managing my time efficiently, prioritizing tasks, and staying organized to meet deadlines without compromising on quality.",
        },
        {
            title: "Problem Solving",
            description:
                "I approach challenges with a strategic mindset, thoroughly analyzing issues and exploring creative solutions.",
        },
        {
            title: "Communication",
            description:
                "I communicate effectively with team members, and clients, ensuring that everyone is on the same page and that expectations are met.",
        },
    ];
    return (
        <div className="lg:w-[60%] text-stone-800 dark:text-stone-400">
            <h1 className="sm:text-5xl text-4xl font-semibold mt-5">I&apos;m Blossom Obasi.</h1>
            <div className="mt-6">
                <p>
                    A software engineer that specializes in building dynamic and responsive web
                    applications. I work with technologies on the client side like Javascript,
                    React, Next.js, and Vite (with TypeScript for configuration).
                </p>
                <br />
                <p>
                    My journey in software development includes creating reusable components,
                    managing state efficiently, and ensuring seamless user experiences across
                    various devices. I approach each project with a scrupulous attention to detail,
                    tackling challenges and finding solutions that meet both user and business
                    needs.
                </p>
                <br />
                <br />

                <h2 className="text-2xl font-semibold mb-5">Favorite Quote</h2>
                <blockquote
                    className="border border-stone-300 dark:border-stone-900 rounded-md w-fit p-5"
                    style={{
                        backgroundImage: "url(/images/noise.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    &ldquo;It always seems impossible until it&apos;s done.&rdquo; — Nelson Mandela
                </blockquote>

                <div className="py-10">
                    <h2 className="text-2xl font-semibold mb-5">Soft skills</h2>
                    <p className="pb-3">Few skills I&apos;ve developed over the years include:</p>

                    <ul className="space-y-5">
                        {softSkill.map((skill, index) => (
                            <li key={index} className="flex">
                                <p>
                                    <span className="font-semibold">{skill.title}:</span>{" "}
                                    {skill.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const AboutPage = () => {
    return (
        <section className="py-10 max-w-[90rem] mx-auto">
            <TextHeader>About Me</TextHeader>

            <div className="flex lg:flex-row flex-col-reverse justify-between lg:items-start items-center gap-10">
                <AboutMe />

                <div className="lg:w-[40%] w-full">
                    <Image
                        src="/images/blossomobasi.jpg"
                        alt="Blossom Obasi"
                        height={500}
                        width={500}
                        className="rounded-2xl"
                    />
                </div>
            </div>

            <AboutSlice1 />
            <AboutSlice2 />
            <AboutSlice3 />
        </section>
    );
};

export default AboutPage;
