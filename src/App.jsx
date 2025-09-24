import { Navbar } from "./Components/Navbar";
import { HeroSection } from "./Components/HeroSection";
import { About } from "./Components/Aboutver1";
export default function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <About />
      </div>
    </>
  );
}
