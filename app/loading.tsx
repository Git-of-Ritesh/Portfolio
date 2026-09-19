import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HomePageSkeleton } from "@/components/PageSkeleton";

export default function Loading() {
  return (
    <div className="bg-black">
      <Navbar />
      <HomePageSkeleton />
      <Footer reveal />
    </div>
  );
}
