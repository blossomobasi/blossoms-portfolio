"use client";

import HeroSvg from "@/components/HeroSvg";
import SocialIcons from "@/components/SocialIcons";
import TechStack from "@/components/TechStack";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const HomePage = () => {
	return (
		<section className="p-2 md:mb-0 mb-20 max-w-[90rem] mx-auto">
			<div className="flex items-center md:py-32 py-20 gap-x-10 gap-y-5 flex-col lg:flex-row">
				<div className="text-sm w-full sm:text-start text-center">
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
					<h1 className="lg:text-6xl md:text-5xl text-3xl font-extrabold">Software Engineer</h1>
					<p className="mt-3 text-stone-700 dark:text-stone-500 text-lg">
						I&apos;m <span className="font-semibold text-black dark:text-stone-300">Blossom Obasi</span>, I specialize
						in building dynamic, scalable, and high-performance web and mobile applications that deliver seamless user
						experiences with a strong emphasis on functionality, adaptability, and user engagement.
					</p>

					{/* Social media links */}
					<SocialIcons />
					<div className="my-5 font-medium text-stone-800 dark:text-stone-400 flex sm:justify-start justify-center">
						<Link
							href="https://wa.me/2349039477184"
							target="_blank"
							className="uppercase hover:underline flex items-center space-x-3"
						>
							<span>Chat me up</span>
							<span>
								<FaWhatsapp size={23} />
							</span>
						</Link>
					</div>
				</div>

				<div className="md:w-[55%] h-full -z-10">
					<HeroSvg />
				</div>
			</div>
			<TechStack />
		</section>
	);
};

export default HomePage;
