import Banner from "./components/Banner"
import bannerDesktop from "./assets/bannerDesktop.png";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";


function App() {

  return (
    <>
    <Header />
     <Banner src={bannerDesktop} alt="Banner" />
     <MovieSection />
    </>
  )
}

export default App
