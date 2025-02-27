import Image from "next/image";
import TextHeader from "@/components/TextHeader";
import { BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import Link from "next/link";
import { Metadata } from "next";
import { Slide } from "../../../animation/Slide";

const AboutSlice1 = () => {
	return (
		<div className="flex md:gap-x-10 gap-y-10 items-center flex-col md:flex-row">
			<div className="h-fit w-full overflow-hidden">
				<Image src="/dedicated_programmer.svg" alt="Laptop" width={1000} height={1000} />
			</div>

			<Slide towards="right" delay={0.5} className="w-full text-center md:text-left">
				<h2 className="text-2xl font-semibold">A dedicated Developer based in Lagos, Nigeria 📍</h2>
				<p className="mt-3">
					I&apos;m currently pursuing a degree in Computer Science at Lagos State University, now in my final year. My
					journey in the world of technology has been both exciting and challenging.
				</p>
			</Slide>
		</div>
	);
};

const AboutSlice2 = () => {
	return (
		<section className="flex items-center md:gap-x-10 gap-y-10 md:my-28 my-16 flex-col-reverse md:flex-row">
			<Slide towards="left" delay={0.5} className="w-full text-center md:text-left">
				<h2 className="text-2xl font-semibold">Collaborations ♻</h2>
				<p className="mt-3">
					I have worked with talented teams to create visually stunning websites for businesses and other exciting
					projects. I am a determined individual who prides myself on my tenacity when it comes to completing tasks.
				</p>
			</Slide>

			<div className="w-full">
				<Image className="w-full h-full" src="/collaboration.svg" alt="Team Collaboration" width={1000} height={1000} />
			</div>
		</section>
	);
};

const AboutSlice3 = () => {
	return (
		<div className="flex md:gap-x-10 gap-y-10 items-center md:my-28 my-16 flex-col md:flex-row">
			<div className="w-full rounded-2xl overflow-hidden">
				<Image src="/fun_moments.svg" alt="fun moments" width={1000} height={1000} />
			</div>
			<Slide towards="right" delay={0.5} className="w-full text-center md:text-left">
				<h2 className="text-2xl font-semibold">
					What I do for fun beyond coding <span className="font-light">〰</span>
				</h2>
				<p className="mt-3">
					I find immense joy in problem-solving. While it may be challenging at times, the satisfaction of overcoming
					obstacles fuels my passion for programming.{" "}
					<span className="font-semibold text-black dark:text-stone-300">Beyond coding</span>, I have a love for diverse
					interests. I enjoy immersing myself in the world of gaming, particularly indulging in Call of Duty Mobile.
					Connecting with friends and family is another source of happiness for me. Oh, and I can&apos;t forget to
					mention my enthusiasm for anime &mdash; it&apos;s a delightful escape!
				</p>
			</Slide>
		</div>
	);
};

const AboutMe = () => {
	const softSkill = [
		{
			title: "Attention to details",
			description: "I extensively focus on the finer aspects of every task, ensuring that nothing is overlooked.",
		},
		{
			title: "Adaptability",
			description:
				"I excel in dynamic environments, swiftly adjusting to new challenges and changes, and staying open-minded to evolving needs.",
		},
		{
			title: "Time Management",
			description:
				"I excel at managing my time efficiently, prioritizing tasks, and staying organized to meet deadlines without compromising on quality.",
		},
		{
			title: "Problem Solving",
			description:
				"I approach challenges with a growth mindset, using each experience as an opportunity to improve and develop. I thoroughly analyze issues and explore innovative solutions to overcome obstacles effectively.",
		},
		{
			title: "Communication",
			description:
				"I communicate effectively with team members, and clients, ensuring that everyone is on the same page and that expectations are met.",
		},
	];
	return (
		<Slide delay={0.5} towards="left" className="lg:w-[60%] text-stone-700 dark:text-stone-400">
			<h1 className="sm:text-5xl text-4xl font-bold mt-5">I&apos;m Blossom Obasi.</h1>
			<div className="mt-6">
				<p>
					A self-taught developer specializing in building dynamic, responsive web and mobile applications. I work with
					client-side technologies such as JavaScript, React, Next.js, Vite (using TypeScript for configuration), and
					React Native (Expo) for mobile app development. On the server side, I utilize technologies such as Nestjs,
					Node.js, Express, MongoDB e.t.c to create robust and scalable solutions.
				</p>
				<br />
				<p>
					My journey in software development is driven by a passion for creating innovative, user-centered solutions. I
					approach every project with meticulous attention to detail, overcoming challenges with thoughtful
					problem-solving to deliver seamless experiences that align with both user expectations and business
					objectives.
				</p>

				<div className="flex space-x-2 w-fit my-5">
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href="/Blossom-Obasi-Fullstack-developer.pdf"
						className="dark:bg-stone-900 bg-stone-200 p-3 w-60 flex justify-center items-center space-x-2 font-semibold rounded-md"
					>
						<span>View Resume</span>
						<BiLinkExternal size={20} />
					</Link>
					<Link
						href="/Blossom-Obasi-Fullstack-developer.pdf"
						download="Blossom-Obasi-Fullstack-developer.pdf"
						className="p-3 bg-stone-200 dark:bg-stone-900 rounded-md"
					>
						<BiSolidDownload size={20} />
					</Link>
				</div>
				<br />
				<br />

				<h2 className="text-2xl font-semibold mb-5">Favorite Quote</h2>
				<blockquote
					className="border border-stone-300 dark:border-stone-900 rounded-md w-fit p-5 text-right italic"
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
							<Slide key={index} towards={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
								<li className="flex">
									<p>
										<span className="font-semibold">{skill.title}:</span> {skill.description}
									</p>
								</li>
							</Slide>
						))}
					</ul>
				</div>
			</div>
		</Slide>
	);
};

export const metadata: Metadata = {
	title: "About Me | Blossom Obasi",
	description:
		"Learn more about Blossom Obasi, a software engineer specializing in dynamic and high-performance web applications.",
};

const AboutPage = () => {
	return (
		<section className="py-10 max-w-[90rem] mx-auto">
			<TextHeader>About Me</TextHeader>

			<div className="flex lg:flex-row flex-col-reverse justify-between lg:items-start items-center gap-10">
				<AboutMe />

				<Slide className="lg:w-[40%] w-full" delay={0.5} towards="right">
					<Image
						src="/images/blossomobasi.png"
						alt="Blossom Obasi"
						height={500}
						width={500}
						quality={100}
						priority
						className="rounded-2xl w-full border-5 border-black"
					/>
				</Slide>
			</div>

			<AboutSlice1 />
			<AboutSlice2 />
			<AboutSlice3 />
		</section>
	);
};

export default AboutPage;
