interface IProjects {
  href: string;
  src: string;
  alt: string;
  title: string;
  development?: boolean;
  collaboration?: boolean;
  content: string;
  type?: "reverse" | "default";
  githubLink: string;
  credentials?: { email: string; password: string };
}

// Define default props
const defaultProps: Partial<IProjects> = {
  development: false,
  collaboration: false,
  type: "default",
};

// Function to merge actual props with default props
function createProject(props: IProjects): IProjects {
  return { ...defaultProps, ...props } as IProjects;
}

export const projects: IProjects[] = [
  createProject({
    href: "https://chow-dev.vercel.app/",
    src: "/images/chow-project.png",
    alt: "Chowgoo Project",
    title: "CHOWGOO - where speed meets satisfaction",
    development: true,
    collaboration: true,
    content:
      "Chowgoo is a website that empowers users to set the pace in delivering food, ensuring that every order reaches its destination with unparalleled speed and efficiency.",
    githubLink: "https://github.com/Dev-kami/chow-frontend",
  }),
  createProject({
    href: "https://the-wild-oasis-dev-b.vercel.app/",
    src: "/images/the-wild-oasis.png",
    alt: "The wild oasis Project",
    title: "The wild Oasis",
    content:
      "The Wild Oasis simplifies cabin rentals, making your getaway dreams a reality. Find your perfect retreat and book your wilderness escape effortlessly. Your adventure starts here.",
    type: "reverse",
    githubLink: "https://github.com/Dev-kami/the-wild-oasis",
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
    githubLink: "https://github.com/Dev-kami/tridehq-clone",
  }),
  createProject({
    href: "https://pluralcode-test-app.vercel.app/",
    src: "/images/pluralcode-test-project.png",
    alt: "Plural Code Test Project",
    title: "Plural Code Test App",
    content:
      "This project was to test my skills in frontend development, including concepts like responsive design, API integration, filtering, and sorting, state management, and more.",
    githubLink: "https://github.com/Dev-kami/pluralcode-test-app",
    type: "reverse",
  }),
  // createProject({
  //   href: "https://road-transit-delivery.vercel.app/",
  //   src: "/images/road-transit-delivery.png",
  //   alt: "Road Transit Delivery Project",
  //   title: "Road Transit Delivery - Fast and reliable delivery service.",
  //   content:
  //     "Road Transit Delivery is a delivery service that ensures your packages are delivered to your desired location with speed and reliability.",
  //   githubLink: "https://github.com/Dev-kami/road-transit-delivery",
  // }),
];
