import Image from "next/image";

const TechStack = () => {
  const techStack = [
    { src: "/images/html.png", alt: "HTML" },
    { src: "/images/css.png", alt: "CSS" },
    { src: "/images/javascript.png", alt: "Javascript" },
    { src: "/images/tailwindcss.png", alt: "Tailwindcss" },
    { src: "/images/react.png", alt: "React" },
    { src: "/images/react-query.jpeg", alt: "React Query" },
    { src: "/images/typescript.png", alt: "Typescript" },
    { src: "/images/supabase.jpeg", alt: "Supabase" },
  ];
  return (
    <div className="flex items-center mt-10 md:gap-8 gap-4 w-fit overflow-hidden overflow-x-auto">
      <span className="font-medium hidden sm:block">Tech Stack |</span>
      <span className="flex items-center gap-8">
        {techStack.map((stack) => (
          <Image
            title={stack.alt}
            key={stack.src}
            src={stack.src}
            alt={stack.alt}
            className="w-6 h-6"
            height={40}
            width={40}
          />
        ))}
      </span>
    </div>
  );
};

export default TechStack;
