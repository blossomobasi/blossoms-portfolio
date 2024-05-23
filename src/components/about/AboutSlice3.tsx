import Image from "next/image";

const AboutSlice3 = () => {
  return (
    <div className="flex md:gap-x-20 gap-y-10 items-center md:my-28 my-16 flex-col md:flex-row">
      <div className="w-full rounded-2xl overflow-hidden">
        <Image
          src="/fun_moments.svg"
          alt="Laptop"
          className="h-[20rem] md:w-[30rem] w-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="w-full text-center md:text-left">
        <h2 className="text-2xl font-semibold">
          What I do for fun beyond coding <span className="font-light">〰</span>
        </h2>
        <p className="mt-3 text-sm text-stone-700 dark:text-stone-500">
          I find immense joy in problem-solving. While it may be challenging at
          times, the satisfaction of overcoming obstacles fuels my passion for
          programming.{" "}
          <span className="font-semibold text-black dark:text-stone-300">
            Beyond coding
          </span>
          , I have a love for diverse interests. I enjoy immersing myself in the
          world of gaming, particularly indulging in Call of Duty Mobile.
          Connecting with friends and family is another source of happiness for
          me. Oh, and I can&apos;t forget to mention my enthusiasm for anime
          &mdash; it&apos;s a delightful escape!
        </p>
      </div>
    </div>
  );
};

export default AboutSlice3;
