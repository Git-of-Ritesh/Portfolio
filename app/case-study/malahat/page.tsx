import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MalahatCaseStudy from "@/components/MalahatCaseStudy";

export const metadata = {
  title: "Elevate & Earn Case Study | Raj Pandey",
  description: "A focused mobile app case study for Elevate & Earn, covering dashboard design, rewards, events, and ambassador flows.",
};

export default function MalahatCaseStudyPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="relative z-10 overflow-hidden rounded-b-[2rem] bg-white md:rounded-b-[3rem]">
        <MalahatCaseStudy />
      </div>
      <Footer reveal />
    </div>
  );
}
