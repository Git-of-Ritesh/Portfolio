import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JournalArticleSkeleton } from "@/components/PageSkeleton";

export default function Loading() {
  return (
    <div className="bg-black">
      <Navbar />
      <JournalArticleSkeleton />
      <Footer reveal />
    </div>
  );
}
