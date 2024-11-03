import Image from "next/image";
import Link from "next/link";
import { projects as projectApi } from "@/data/projects";

import { FaGithub } from "react-icons/fa6";
import TextHeader from "@/components/TextHeader";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const ProjectsPage = () => {
    const projects = projectApi;

    return (
        <section className="max-w-[90rem] my-14 mx-auto">
            <TextHeader>Projects</TextHeader>
            <p className="md:w-[35rem] -mt-4 mb-5 dark:text-stone-400">
                I&apos;ve worked on a number of projects over the years but these are the ones
                I&apos;m most proud of. Some are personal projects, some are collaborations and some
                are client projects.
            </p>

            <div className="space-y-10 md:space-y-10">
                {projects.map((project, i) => (
                    <div
                        key={project.alt}
                        className={`${
                            i % 2 === 1 && "flex-row-reverse md:flex-row-reverse"
                        } flex items-center flex-col md:flex-row gap-x-10 gap-y-5 p-3 rounded-sm h-full`}
                    >
                        <Link
                            target="_blank"
                            href={project.href || ""}
                            className={`flex-1 -z-10 ${
                                project.href && "border"
                            } border-stone-200 hover:border-stone-400 dark:border-stone-900 p-2 relative`}
                        >
                            <Image
                                src={project.src || ""}
                                alt={project.alt || ""}
                                width={1000}
                                height={1000}
                                priority={project.alt === "Organic Foodie Project"}
                            />
                            {project.collaboration && (
                                <span className="absolute bottom-0 right-0 bg-purple-100 text-purple-500 border border-purple-500 dark:text-purple-700 dark:bg-purple-200 dark:border-purple-700 rounded-tl-full px-1.5 pl-3 text-sm">
                                    Collaboration
                                </span>
                            )}
                        </Link>
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold">{project.title}</h2>
                            <p className="mt-5 mb-2 text-sm text-stone-700 dark:text-stone-500">
                                {project.content}
                            </p>

                            {/* Currently In Development */}
                            {project?.development && (
                                <small className="block mb-3 text-red-500">
                                    This project is currently under development.
                                </small>
                            )}
                            {project?.credentials && (
                                <div className="mb-2 flex flex-col text-green-700">
                                    <small>
                                        Email:{" "}
                                        <span className="select-all">
                                            {project.credentials?.email}
                                        </span>
                                    </small>
                                    <small>
                                        Password:{" "}
                                        <span className="select-all">
                                            {project.credentials?.password}
                                        </span>
                                    </small>
                                </div>
                            )}

                            <div className="flex gap-2 py-2 text-sm dark:text-stone-300 flex-wrap">
                                {project.stacks?.map((project, i) => (
                                    <span key={i}>{project}</span>
                                ))}
                            </div>

                            {project.href && project.githubLink && (
                                <div className="flex space-x-3">
                                    <Button url={project.href}>Live</Button>
                                    <Icon title="Github" url={project.githubLink}>
                                        <FaGithub />
                                    </Icon>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;
