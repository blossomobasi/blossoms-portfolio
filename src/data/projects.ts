interface IProjects {
    href: string;
    src: string;
    alt: string;
    title: string;
    development?: boolean;
    collaboration?: boolean;
    content: string;
    githubLink: string;
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
        href: "https://www.chowgoo.com/",
        src: "/images/chowgoo.png",
        alt: "Chowgoo Project",
        title: "CHOWGOO - where speed meets satisfaction",
        development: true,
        collaboration: true,
        content:
            "Chowgoo is a website that empowers users to set the pace in delivering food, ensuring that every order reaches its destination with unparalleled speed and efficiency.",
        githubLink: "https://github.com/blossomobasi/chow-frontend",
    }),
    createProject({
        href: "https://sesto-elemento.vercel.app/",
        src: "/images/sesto_elemento.png",
        alt: "Sesto Elemento Project",
        title: "Sesto Elemento - Empowering Success in projects and Operation",
        content:
            "Indigenous oil and gas project and operational support servicing company, purposed to provide best-in-class services in markets across Africa and other regions.",
        githubLink: "https://github.com/blossomobasi/sesto-elemento",
    }),
    createProject({
        href: "https://pluralcode-test-app.vercel.app/",
        src: "/images/pluralcode-test-project.png",
        alt: "Plural Code Test Project",
        title: "Plural Code Test App",
        content:
            "This project was to test my skills in frontend development, including concepts like responsive design, API integration, filtering, and sorting, state management, and more.",
        githubLink: "https://github.com/blossomobasi/pluralcode-test-app",
    }),
    createProject({
        href: "https://the-wild-oasis-dev-b.vercel.app/",
        src: "/images/the-wild-oasis.png",
        alt: "The wild oasis Project",
        title: "The wild Oasis",
        content:
            "The Wild Oasis simplifies cabin rentals, making your getaway dreams a reality. Find your perfect retreat and book your wilderness escape effortlessly. Your adventure starts here.",
        githubLink: "https://github.com/blossomobasi/the-wild-oasis",
        credentials: {
            email: "test@test.com",
            password: "12345678",
        },
    }),
    createProject({
        href: "https://tridehq-clone.vercel.app/",
        src: "/images/tridehq-clone.png",
        alt: "Tridehq clone Project",
        title: "Tridehq-clone - Banking made easy for churches and ministries",
        content:
            "Tride helps you receive funds faster from your members and donors with dedicated bank accounts and online payment options.",
        githubLink: "https://github.com/blossomobasi/tridehq-clone",
    }),
    createProject({
        href: "https://todo-frontend-woad.vercel.app/",
        src: "/images/todo-project.png",
        alt: "Todo Project",
        title: "Todo App",
        content:
            "A simple todo app that allows users to create, update and delete tasks. It also allows users to mark tasks as completed, set reminder and so on. It has an authentication system that allows users to sign up and login.",
        githubLink: "https://github.com/blossomobasi/todo-frontend",
    }),
];
