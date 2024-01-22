import About from "@/components/About";
import Home from "@/components/Home";

function Page() {
  return (
    <main className="h-[calc(100vh-3.5rem)] lg:px-40 md:px-20 px-4  overflow-auto">
      <Home />
      <About />
    </main>
  );
}

export default Page;
