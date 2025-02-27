import { Slide } from "../../animation/Slide";

const TextHeader = ({ children }: { children: React.ReactNode }) => {
	return (
		<Slide
			towards="left"
			className="uppercase font-extrabold text-stone-600 dark:text-stone-300 relative w-fit mb-10 text-xl italic -z-10 text-center"
		>
			{children}
			<div className="absolute h-0.5 w-full bg-stone-600 dark:bg-stone-300" />
		</Slide>
	);
};

export default TextHeader;
