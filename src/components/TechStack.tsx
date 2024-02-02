import { techStackData } from "@/data/techStack";
import Image from "next/image";

const TechStack = () => {
  const techStack = techStackData;

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
