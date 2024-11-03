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

            <DisplayStack data={frontendStacks} title="Front-end" />
            <DisplayStack data={backendStacks} title="Back-end" />
            <DisplayStack data={tools} title="Tools" />
        </div>
    );
};

type DisplayStackProps = {
    title: string;
    data: { src: string; alt: string; change?: boolean }[];
};

const DisplayStack = ({ title, data }: DisplayStackProps) => {
    return (
        <div className="mt-5">
            <h2 className="text-2xl font-semibold py-5">{title}</h2>

            <div className="flex gap-x-5 gap-y-5 flex-wrap items-center flex-shrink-0">
                {data.map((el) => (
                    <span
                        key={el.alt}
                        className="border border-stone-300 bg-stone-100 dark:border-stone-800 dark:bg-[#0a0a0a] rounded-md p-2"
                    >
                        <Image
                            className={`cursor-pointer p-2 rounded-md ${
                                el.change && "dark:bg-gray-300"
                            }`}
                            title={el.alt}
                            src={el.src}
                            alt={el.alt}
                            height={60}
                            width={60}
                        />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
