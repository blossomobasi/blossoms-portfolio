import About from "@/components/about/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Projects from "@/components/Projects";

function Page() {
  return (
    <main className="h-[calc(100vh-3.5rem)] lg:px-40 md:px-20 px-4 overflow-auto">
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default Page;
