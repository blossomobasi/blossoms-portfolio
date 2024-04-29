interface IProjects {
  href: string;
  src: string;
  alt: string;
  title: string;
  development?: boolean;
  collaboration?: boolean;
  content: string;
  type?: "default" | "reverse";
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
function createProject(props: Partial<IProjects>): IProjects {
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
    href: "https://road-transit-delivery.vercel.app/",
    src: "/images/road-transit-delivery.png",
    alt: "Road Transit Delivery Project",
    title:
      "Road Transit Delivery - We will move anything into any direction you want",
    content:
      "Road Transit Delivery is a logistics company that provides a wide range of services to meet your delivery needs. We are committed to providing the best service to our customers.",
    githubLink: "https://github.com/Dev-kami/road-transit-delivery",
    type: "reverse",
  }),
];
