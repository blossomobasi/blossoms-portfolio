import AboutSlice1 from "./AboutSlice1";
import AboutSlice2 from "./AboutSlice2";
import AboutSlice3 from "./AboutSlice3";

const About = () => {
  return (
    <section className="md:pt-28">
      <div className="uppercase font-medium relative w-fit mb-10 text-xl italic">
        About me
        {/* <div className="absolute h-0.5 w-full bg-primary-800" /> */}
      </div>

      <AboutSlice1 />
      <AboutSlice2 />
      <AboutSlice3 />
    </section>
  );
};

export default About;
