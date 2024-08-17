import { frontendStacks as frontendStacksApi } from "@/data/techStack";
import { backendStacks as backendStacksApi } from "@/data/techStack";
import Image from "next/image";
import TextHeader from "./TextHeader";

const TechStack = () => {
    const frontendStacks = frontendStacksApi;
    const backendStacks = backendStacksApi;

    return (
        <div className="mt-10">
            <TextHeader>Technologies I work with</TextHeader>

            <div>
                <h2 className="text-2xl font-semibold py-5 text-stone-800 dark:text-stone-300">
                    Front-end
                </h2>

                <div className="flex gap-x-10 gap-y-5 flex-wrap items-center flex-shrink-0">
                    {frontendStacks.map((stack) => (
                        <span key={stack.alt} className="">
                            <Image
                                className={`dark:filter dark:grayscale cursor-pointer transition-all duration-300 border dark:border-[#0a0a0a] dark:hover:border-white p-2 border-stone-300 rounded-md ${
                                    stack.change
                                        ? "dark:bg-red-300 dark:scale-75"
                                        : "dark:hover:filter-none"
                                }`}
                                title={stack.alt}
                                src={stack.src}
                                alt={stack.alt}
                                width={60}
                                height={60}
                            />
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-5">
                <h2 className="text-2xl font-semibold py-5 text-stone-800 dark:text-stone-300">
                    Back-end
                </h2>

                <div className="flex space-x-10 flex-wrap items-center flex-shrink-0">
                    {backendStacks.map((stack) => (
                        <span key={stack.alt}>
                            <Image
                                className={`dark:filter dark:grayscale cursor-pointer transition-all duration-300 border dark:border-[#0a0a0a] dark:hover:border-white p-2 border-stone-300 rounded-md ${
                                    stack.change
                                        ? "dark:bg-red-300 dark:scale-75"
                                        : "dark:hover:filter-none"
                                }`}
                                title={stack.alt}
                                src={stack.src}
                                alt={stack.alt}
                                height={60}
                                width={60}
                            />
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
