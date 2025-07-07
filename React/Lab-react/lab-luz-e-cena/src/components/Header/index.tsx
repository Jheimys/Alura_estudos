import Logo from "../Logo"
import HeaderActions from "./components/HeaderActions"
import HeaderFormFilter from "./components/HeaderFormFilter"
import HeaderItem from "./components/HeaderItem"
import HeaderLinks from "./components/HeaderLinks"
import HeaderList from "./components/HeaderList"

const Header = () => {
  return (
    <header>
      <HeaderList>
        
        <HeaderItem>
          <Logo src="../../public/logo.png" alt="Luz e Cena" />
        </HeaderItem>

        <HeaderItem>
          <HeaderLinks/>
        </HeaderItem>

        <HeaderItem>
          <HeaderFormFilter/>
        </HeaderItem>

        <HeaderItem>
          <HeaderActions  />
        </HeaderItem>

      </HeaderList>
    </header>
  )
}

export default Header