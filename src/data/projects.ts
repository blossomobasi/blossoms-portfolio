interface IProjects {
  href: string;
  src: string;
  alt: string;
  title: string;
  development?: boolean;
  collaboration?: boolean;
  content: string;
  type?: "reverse" | "default"; // Fix this later - laziness wan kill me
  githubLink: string;
  credentials?: { email: string; password: string };
}

export const projects: IProjects[] = [
  {
    href: "https://chow-dev.vercel.app/",
    src: "/images/chow-project.png",
    alt: "Chowgoo Project",
    title: "CHOWGOO - where speed meets satisfaction",
    development: true,
    collaboration: true,
    content:
      "Chowgoo is a website that empowers users to set the pace in delivering food, ensuring that every order reaches its destination with unparalleled speed and efficiency.",
    githubLink: "https://github.com/Dev-kami/chow-frontend",
  },
  {
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
  },
  {
    href: "https://tridehq-clone.vercel.app/",
    src: "/images/tridehq-clone.png",
    alt: "Tridehq clone Project",
    title: "Tridehq-clone - Banking made easy for churches and ministries",
    content:
      "Tride helps you receive funds faster from your members and donors with dedicated bank accounts and online payment options.",
    githubLink: "https://github.com/Dev-kami/tridehq-clone",
  },
];
