import Banner from "./components/Banner"
import bannerDesktop from "./assets/bannerDesktop.png";
import Link from "./components/Link";


function App() {

  return (
    <>
    <Link href="/" target="_blank"> Link </Link>
     <Banner src={bannerDesktop} alt="Banner" />
    </>
  )
}

export default App
