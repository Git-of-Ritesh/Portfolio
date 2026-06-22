import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const web3FormsAccessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

  return (
    <div className="bg-black">
      <Navbar />
      <main className="relative z-10 overflow-clip rounded-b-[2rem] bg-white md:rounded-b-[3rem]">
        <Hero />
        <About />
        <Skills />
        <Projects limit={3} />
        <Experience />
        <Blog />
        <Contact accessKey={web3FormsAccessKey} />
      </main>
      <Footer reveal />
    </div>
  );
}
