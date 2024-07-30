import About from "@/components/about/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import ScrollUpButton from "@/components/ScrollUpButton";

function Page() {
    return (
        <main className="w-full">
            <NavBar />

            <section className="lg:px-40 md:px-20 px-5 pt-16">
                <Home />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </section>

            <ScrollUpButton />
        </main>
    );
}

export default Page;
