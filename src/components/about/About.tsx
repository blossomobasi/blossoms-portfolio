import AboutSlice1 from "./AboutSlice1";
import AboutSlice2 from "./AboutSlice2";
import AboutSlice3 from "./AboutSlice3";

const About = () => {
  return (
    <section className="md:pt-28" id="about">
      <div className="uppercase font-extrabold text-stone-600 dark:text-stone-300 relative w-fit mb-10 text-xl italic -z-10">
        About me
        <div className="absolute h-0.5 w-full bg-stone-600 dark:bg-stone-300" />
      </div>

      <AboutSlice1 />
      <AboutSlice2 />
      <AboutSlice3 />
    </section>
  );
};

export default About;
