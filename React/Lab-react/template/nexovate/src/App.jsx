import Hero from './sections/Hero';
import About  from './sections/About';
import Clients from './sections/Clients';
import Offer  from './sections/Offer';
import Portfolio from './sections/Portfolio';
import Reviews from './sections/Reviews';
import Cta from './sections/Cta';
import Header from './sections/Header';
import Footer from './sections/Footer';

export default function App() {
  return (
   <>
    <Header />
    <Hero />
    <About />
    <Clients />
    <Offer/>
    <Portfolio />
    <Reviews />
    <Cta />
    <Footer />
   </>
  )
}