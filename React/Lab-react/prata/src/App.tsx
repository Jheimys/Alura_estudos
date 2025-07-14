import Banner from "./components/Banner"
import banner from "./assets/banner-por-sol.webp"
import Header from "./components/Header"
import LunchAndLearnSection from "./components/LunchSection"
import ReadyToLearnSection from "./components/ReadyToLearnSection"

function App() {
 

  return (
    <>
        <Header />
        <Banner src={banner} alt="banner prata linving" />
        <LunchAndLearnSection />
        <ReadyToLearnSection />
    </>
  )
}

export default App
