import Banner from "./components/Banner"
import bannerDesktop from "./assets/bannerDesktop.png";
import Header from "./components/Header";


function App() {

  return (
    <>
    <Header />
     <Banner src={bannerDesktop} alt="Banner" />
    </>
  )
}

export default App
