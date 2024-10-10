interface IProjects {
    href?: string;
    src?: string;
    alt?: string;
    title?: string;
    development?: boolean;
    collaboration?: boolean;
    content: string;
    stacks?: string[];
    githubLink?: string;
    credentials?: { email: string; password: string };
}

// Define default props
const defaultProps: Partial<IProjects> = {
    development: false,
    collaboration: false,
};

// Function to merge actual props with default props
function createProject(props: IProjects): IProjects {
    return { ...defaultProps, ...props } as IProjects;
}

export const projects: IProjects[] = [
    createProject({
        href: "https://sesto-elemento.vercel.app/",
        src: "/images/sesto_elemento.png",
        alt: "Sesto Elemento Project",
        title: "Sesto Elemento - Empowering Success in projects and Operation",
        content:
            "Indigenous oil and gas project and operational support servicing company, purposed to provide best-in-class services in markets across Africa and other regions.",
        stacks: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        githubLink: "https://github.com/blossomobasi/sesto-elemento",
    }),
    createProject({
        href: "https://blogssom.vercel.app/",
        src: "/images/blogssom-project.png",
        alt: "Blogssom Project",
        title: "Blogssom - Blog your way round the world.",
        content:
            "Blogssom is a platform that allows users create and share their thoughts, ideas, and experiences about their travels and adventures to the world.",
        stacks: ["React", "Tailwind CSS", "TypeScript", "Node.js", "Express", "MongoDB"],
        credentials: {
            email: "janedoe@gmail.com",
            password: "password",
        },
        githubLink: "https://github.com/blossomobasi/blogssom",
    }),
    createProject({
        href: "https://www.chowgoo.com/",
        src: "/images/chowgoo.png",
        alt: "Chowgoo Project",
        title: "CHOWGOO - where speed meets satisfaction",
        collaboration: true,
        stacks: ["React", "Next.js", "Tailwind CSS", "TypeScript", "React Query"],
        content:
            "Chowgoo is a website that empowers users to set the pace in delivering food, ensuring that every order reaches its destination with unparalleled speed and efficiency.",
        githubLink: "https://github.com/blossomobasi/chow-frontend",
    }),
    createProject({
        href: "https://pluralcode-test-app.vercel.app/",
        src: "/images/pluralcode-test-project.png",
        alt: "Plural Code Test Project",
        title: "Plural Code Test App",
        stacks: ["React", "Nextjs", "Tailwind CSS", "TypeScript", "Context API"],
        content:
            "This project includes concepts like responsive design, API integration, filtering, and sorting, state management, and more.",
        githubLink: "https://github.com/blossomobasi/pluralcode-test-app",
    }),
    createProject({
        href: "https://tridehq-clone.vercel.app/",
        src: "/images/tridehq-clone.png",
        alt: "Tridehq clone Project",
        title: "Tridehq-clone - Banking made easy for churches and ministries",
        stacks: ["React", "Tailwind CSS", "Context API"],
        content:
            "Tride helps you receive funds faster from your members and donors with dedicated bank accounts and online payment options.",
        githubLink: "https://github.com/blossomobasi/tridehq-clone",
    }),
    createProject({
        title: "Coming Soon",
        content:
            "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        src: "/under_construction.svg",
        alt: "Coming Soon",
    }),
];
