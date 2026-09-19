import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProjectSectionSkeleton } from "@/components/PageSkeleton";

export default function Loading() {
  return (
    <main className="bg-white">
      <Navbar />
      <ProjectSectionSkeleton />
      <Footer />
    </main>
  );
}
