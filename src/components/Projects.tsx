import Image from "next/image";
import Link from "next/link";
import { projects as projectApi } from "../data/projects";

import { FaGithub } from "react-icons/fa6";

import Icon from "./Icon";
import Button from "./Button";
import TextHeader from "./TextHeader";

const Projects = () => {
    const projects = projectApi;

    return (
        <section id="projects">
            <TextHeader>Projects</TextHeader>

            <div className="space-y-10 md:space-y-10">
                {projects.map((project) => (
                    <div
                        key={project.alt}
                        className={`${
                            project?.type === "reverse" && "flex-row-reverse md:flex-row-reverse"
                        } flex items-center flex-col md:flex-row gap-x-10 gap-y-5 p-3 rounded-sm h-full`}
                    >
                        <Link
                            target="_blank"
                            href={project.href}
                            className="flex-1 -z-10 border border-stone-200 hover:border-stone-400 dark:border-stone-900 p-2 relative"
                        >
                            <Image src={project.src} alt={project.alt} width={1000} height={1000} />
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
                                    This project is currently in development &mdash; Though Landing
                                    page can be viewed
                                </small>
                            )}
                            {project?.credentials && (
                                <div className="mb-2 flex flex-col text-green-700">
                                    <small>Email: {project.credentials?.email}</small>
                                    <small>Password: {project.credentials?.password}</small>
                                </div>
                            )}

                            <div className="flex space-x-3">
                                <Button url={project.href}>Live</Button>
                                <Icon title="Github" url={project.githubLink}>
                                    <FaGithub />
                                </Icon>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
