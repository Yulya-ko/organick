import Hero from "../components/Hero/Hero";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import AboutSection from "../components/About/AboutSection/AboutSection";
import Categories from "../components/Categories/Categories";
import Testimonial from "../components/Testimonial/Testimonial";
import SectionEco from "../components/SectionEco/SectionEco";
import SectionEcoCards from "../components/SectionEco/SectionEcoCards";
import SectionNews from "../components/SectionNews/SectionNews";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <PromoBanner />
      <AboutSection />
      <Categories />
      <Testimonial />
      <SectionEco />
      <SectionEcoCards />
      <SectionNews />
    </div>
  );
}
