import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JournalSkeleton } from "@/components/PageSkeleton";

export default function Loading() {
  return (
    <div className="bg-black">
      <Navbar />
      <JournalSkeleton />
      <Footer reveal />
    </div>
  );
}
