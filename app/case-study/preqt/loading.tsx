import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CaseStudySkeleton } from "@/components/PageSkeleton";

export default function Loading() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="relative z-10 overflow-clip rounded-b-[2rem] bg-white md:rounded-b-[3rem]">
        <CaseStudySkeleton />
      </div>
      <Footer reveal />
    </div>
  );
}
