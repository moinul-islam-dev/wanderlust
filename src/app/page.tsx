import Banner from "@/components/home/Banner";
import CTASection from "@/components/home/CTASection";
import FeatureSection from "@/components/home/FeatureSection";
import Testimonials from "@/components/home/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FeatureSection />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default HomePage;
