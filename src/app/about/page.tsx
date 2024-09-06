import AboutSlice1 from "@/components/about/AboutSlice1";
import AboutSlice2 from "@/components/about/AboutSlice2";
import AboutSlice3 from "@/components/about/AboutSlice3";
import TextHeader from "@/components/TextHeader";

const AboutPage = () => {
    return (
        <section className="py-10 max-w-[90rem] mx-auto">
            <TextHeader>About Me</TextHeader>

            <AboutSlice1 />
            <AboutSlice2 />
            <AboutSlice3 />
        </section>
    );
};

export default AboutPage;
