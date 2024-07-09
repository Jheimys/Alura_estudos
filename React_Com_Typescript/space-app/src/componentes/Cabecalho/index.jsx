import CampoTexto from '../../CampoTexto'
import styled from "styled-components"

const HeaderEstilizado = styled.header`
    padding: 60px;
    display: flex;
    justify-content: space-between;
`

const Logo = styled.img`
    width: 212px;
    height: 65px;
    top: 60px;
    left: 24px;
    gap: 0px;
    opacity: 0px;
` 

const Cabecalho = () => {
    return(
        <HeaderEstilizado>
            <Logo src="../public/imagens/logo.png" alt="logo"/>
            <CampoTexto />
        </HeaderEstilizado>
    )
}

export default Cabecalho