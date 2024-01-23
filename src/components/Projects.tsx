import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      src: "/images/chow.png",
      alt: "Chow Project",
      title: "This is where the title goes",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A obcaecati enim, maiores quas id veniam tenetur amet saepe eum aut architecto quae distinctio modi, omnis sunt ad quasi alias? Ab! ",
    },
    {
      src: "/images/the-wild-oasis.png",
      alt: "The wild oasis Project",
      title: "This is where the title goes",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A obcaecati enim, maiores quas id veniam tenetur amet saepe eum aut architecto quae distinctio modi, omnis sunt ad quasi alias? Ab! ",
      type: "reverse",
    },
    {
      src: "/images/tridehq-clone.png",
      alt: "Tridehq clone Project",
      title: "This is where the title goes",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A obcaecati enim, maiores quas id veniam tenetur amet saepe eum aut architecto quae distinctio modi, omnis sunt ad quasi alias? Ab! ",
    },
  ];
  return (
    <section id="projects">
      <div className="uppercase font-extrabold text-stone-600 relative w-fit mb-10 text-xl italic -z-10">
        Projects
        <div className="absolute h-0.5 w-full bg-stone-600" />
      </div>

      <div>
        {projects.map((project) => (
          <div
            key={project.alt}
            className={`${
              project?.type === "reverse" && "flex-row-reverse"
            } flex items-center flex-col md:flex-row gap-x-5 p-3 rounded-sm h-full`}
          >
            <Image
              className="h-full flex-1 bg-red-800 w-full object-contain"
              src={project.src}
              alt={project.alt}
              width={1000}
              height={1000}
            />
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="mt-3 text-sm text-stone-700">{project.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
