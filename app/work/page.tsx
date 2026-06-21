import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Work | Raj Pandey — Mobile App Developer",
  description: "A deep dive into my professional portfolio, featuring apps shipped across fintech, health, and creator platforms.",
};

export default function WorkPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <Projects isFullPage />
      <Footer />
    </main>
  );
}
