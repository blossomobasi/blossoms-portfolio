import AboutSlice1 from "./AboutSlice1";
import AboutSlice2 from "./AboutSlice2";
import AboutSlice3 from "./AboutSlice3";
import TextHeader from "../TextHeader";

const About = () => {
    return (
        <section className="md:pt-28" id="about">
            <TextHeader>About Me</TextHeader>

            <AboutSlice1 />
            <AboutSlice2 />
            <AboutSlice3 />
        </section>
    );
};

export default About;
