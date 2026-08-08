import './App.css';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import WhySolar from './sections/WhySolar';
import HowItWorks from './sections/HowItWorks';
import Benefits from './sections/Benefits';
import SavingsCalculator from './sections/SavingsCalculator';
import Components from './sections/Components';
import Packages from './sections/Packages';
import Business from './sections/Business';
import Gallery from './sections/Gallery';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhySolar />
        <HowItWorks />
        <Benefits />
        <SavingsCalculator />
        <Components />
        <Packages />
        <Business />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
