import AboutUs from "./components/AboutUs/AboutUs";
import Features from "./components/Features/Features";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import NewsBar from "./components/NewsBar/NewsBar";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <NewsBar />
      <AboutUs />
      <Services />
      <Features />
    </>
  );
}

export default App;
