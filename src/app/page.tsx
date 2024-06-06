import HeroSection from "@/componentes/HeroSection";
import FeaturedCourses from "@/componentes/FeaturedCourses";
import WhyChooseUs from "@/componentes/WhyChooseUs";
import MusicSchoolTestimonials from "@/componentes/TestimonialCards";
import UpcomingWebinars from "@/componentes/UpcomingWebinars";
import Instructors from "@/componentes/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
    </main>
  );
}
