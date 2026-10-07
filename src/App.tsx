import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import TrustStats from "./sections/TrustStats";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import About from "./sections/About";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import { LanguageProvider } from "./context/LanguageContext";
const App = () => {
  return (
    <LanguageProvider>
    <div className="min-h-screen bg-white text-gray-950">
      <Navbar />

      <main>
        <Hero />
           <TrustStats />

           <Services />

           <Projects />

           <Process />

           <Testimonials />

           <Pricing />

           <About />

           <FAQ />
       
           <Contact />
       
      
      </main>

      <Footer />
    </div>
    </LanguageProvider>
  );
};

export default App;