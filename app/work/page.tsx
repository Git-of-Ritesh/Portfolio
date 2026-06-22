import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Work | Raj Pandey — Flutter App Developer",
  description: "Flutter-focused app work across live iOS and Android projects, including Elevate & Earn and PrEqt.",
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
