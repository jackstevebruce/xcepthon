import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Tracks from "./components/Tracks";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import PrizePool from "./components/Pricepool";

function App() {
  return (
    <div
      className="min-h-screen bg-goku-dark text-white font-sans selection:bg-goku
    -orange selection:text-white overflow-hidden"
    >
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <PrizePool />
      <Schedule />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
