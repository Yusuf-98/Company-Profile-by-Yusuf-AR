import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import About from '../components/sections/About';
import ServiceSection from '../components/sections/ServiceSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import ContactFormSection from '../components/sections/ContactFormSection';
import Footer from '../components/layout/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <ServiceSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
