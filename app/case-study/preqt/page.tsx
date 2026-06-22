import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreqtCaseStudy from "@/components/PreqtCaseStudy";

export const metadata = {
  title: "PrEqt Case Study | Raj Pandey",
  description: "A developer-focused case study on Raj Pandey's contribution to PrEqt across Flutter app features and web admin workflows at Webninjaz.",
};

export default function PreqtCaseStudyPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="relative z-10 overflow-clip rounded-b-[2rem] bg-white md:rounded-b-[3rem]">
        <PreqtCaseStudy />
      </div>
      <Footer reveal />
    </div>
  );
}
