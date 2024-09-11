import {
    frontendStacks as frontendStacksApi,
    tools as toolsApi,
    backendStacks as backendStacksApi,
} from "@/data/techStack";
import Image from "next/image";
import TextHeader from "./TextHeader";

const TechStack = () => {
    const frontendStacks = frontendStacksApi;
    const backendStacks = backendStacksApi;
    const tools = toolsApi;

    return (
        <div className="mt-5">
            <TextHeader>Technologies I work with</TextHeader>

            <div>
                <h2 className="text-2xl font-semibold py-5">
                    Front-end
                </h2>

                <div className="flex gap-x-5 gap-y-5 flex-wrap items-center flex-shrink-0">
                    {frontendStacks.map((stack) => (
                        <span
                            key={stack.alt}
                            className="border border-stone-300 bg-stone-100 dark:border-stone-800 dark:bg-[#0a0a0a] rounded-md p-2"
                        >
                            <Image
                                className={`cursor-pointer p-2 rounded-md ${
                                    stack.change && "bg-gray-300"
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
                <h2 className="text-2xl font-semibold py-5">
                    Back-end
                </h2>

                <div className="flex gap-x-5 gap-y-5 flex-wrap items-center flex-shrink-0">
                    {backendStacks.map((stack) => (
                        <span
                            key={stack.alt}
                            className="border border-stone-300 bg-stone-100 dark:border-stone-800 dark:bg-[#0a0a0a] rounded-md p-2"
                        >
                            <Image
                                className={`cursor-pointer p-2 rounded-md ${
                                    stack.change && "bg-gray-300"
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

            <div className="mt-5">
                <h2 className="text-2xl font-semibold py-5">
                    Tools
                </h2>

                <div className="flex gap-x-5 gap-y-5 flex-wrap items-center flex-shrink-0">
                    {tools.map((stack) => (
                        <span
                            key={stack.alt}
                            className="border border-stone-300 bg-stone-100 dark:border-stone-800 dark:bg-[#0a0a0a] rounded-md p-2"
                        >
                            <Image
                                className={`cursor-pointer p-2 rounded-md ${
                                    stack.change && "bg-gray-300"
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
