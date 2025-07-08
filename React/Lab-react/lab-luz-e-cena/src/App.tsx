import Banner from "./components/Banner"
import bannerDesktop from "./assets/bannerDesktop.png";
import combo from "./assets/combo.png";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";


function App() {

  return (
    <>
    <Header />
     <Banner src={bannerDesktop} alt="Banner" />
     <MovieSection />
      <Banner src={combo} alt="Combo" />
      <Newsletter />
      <Footer/>
    </>
  )
}

export default App
