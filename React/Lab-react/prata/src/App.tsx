import Banner from "./components/Banner"
import banner from "./assets/banner-por-sol.webp"
// import ponteVaco from './assets/abstract-banner.avif'
import prataVista from './assets/prata-vista.jpg'
import Header from "./components/Header"
import LunchAndLearnSection from "./components/LunchSection"
import ReadyToLearnSection from "./components/ReadyToLearnSection"
import ParallaxBanner from "./components/Parallax"
import Footer from "./components/Footer"



function App() {
 

  return (
    <>
        <Header />
        <Banner src={banner} alt="banner prata linving" />
        <LunchAndLearnSection />
        <ReadyToLearnSection />
        <ParallaxBanner image={prataVista} />
        <Footer />
    </>
  )
}

export default App
