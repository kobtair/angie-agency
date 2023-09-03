import AboutUs from "./components/AboutUs/AboutUs";
import Features from "./components/Features/Features";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import NewsBar from "./components/NewsBar/NewsBar";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <NewsBar />
      <AboutUs />
      <Services />
      <Features />
      <Works />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
