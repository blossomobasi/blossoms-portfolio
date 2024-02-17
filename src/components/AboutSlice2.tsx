import Image from "next/image";
import React from "react";

const AboutSlice2 = () => {
  return (
    <section className="flex items-center md:gap-x-20 gap-y-10 md:my-28 my-16 flex-col-reverse md:flex-row">
      <div className="w-full text-center md:text-left">
        <h2 className="text-2xl font-semibold">Collaborations ♻</h2>
        <p className="text-sm mt-3 text-stone-700">
          In collaboration with talented teams, I&apos;ve contributed to the
          creation of visually striking websites for businesses and other
          exciting projects. I pride myself on being a gritty individual; when I
          set my mind on a task, I navigate through it with determination, often
          pushing boundaries without taking much rest.
        </p>
      </div>

      <div className="w-full">
        <Image
          className="w-full h-full"
          src="/undraw_work_time_re_hdyv.svg"
          alt="Team Collaboration"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default AboutSlice2;
