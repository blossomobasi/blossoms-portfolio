import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Projects = () => {
  const projects = [
    {
      href: "https://chow-frontend-2m7o54od6-herdeybayor.vercel.app/",
      src: "/images/chow-project.png",
      alt: "Chow Project",
      title: "CHOW - where speed meets satisfaction",
      development: true,
      content:
        "Chow is a website that empowers users to set the pace in delivering food, ensuring that every order reaches its destination with unparalleled speed and efficiency.",
    },
    {
      href: "https://the-wild-oasis-dev-b.vercel.app/",
      src: "/images/the-wild-oasis.png",
      alt: "The wild oasis Project",
      title: "The wild Oasis",
      content:
        "The Wild Oasis simplifies cabin rentals, making your getaway dreams a reality. Find your perfect retreat and book your wilderness escape effortlessly. Your adventure starts here.",
      type: "reverse",
    },
    {
      href: "https://tridehq-clone.vercel.app/",
      src: "/images/tridehq-clone.png",
      alt: "Tridehq clone Project",
      title: "Tridehq-clone - Banking made easy for churches and ministries",
      content:
        "Tride helps you receive funds faster from your members and donors with dedicated bank accounts and online payment options.",
    },
  ];
  return (
    <section id="projects">
      <div className="uppercase font-extrabold text-stone-600 relative w-fit mb-10 text-xl italic -z-10">
        Projects
        <div className="absolute h-0.5 w-full bg-stone-600" />
      </div>

      <div className="space-y-10 md:space-y-10">
        {projects.map((project) => (
          <div
            key={project.alt}
            className={`${
              project?.type === "reverse" &&
              "flex-row-reverse md:flex-row-reverse"
            } flex items-center flex-col md:flex-row gap-x-10 gap-y-5 p-3 rounded-sm h-full`}
          >
            <Link
              target="_blank"
              href={project.href}
              className="flex-1 border border-stone-200 hover:border-stone-400 p-2"
            >
              <Image
                src={project.src}
                alt={project.alt}
                width={1000}
                height={1000}
              />
            </Link>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="my-5 text-sm text-stone-700">{project.content}</p>

              {/* Currently In Development */}
              {project?.development && (
                <small className="block mb-3 text-red-500">
                  This project is currently in development &mdash; Though
                  Landing page can be viewed
                </small>
              )}

              <Button url={project.href}>View</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
