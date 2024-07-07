import styled from "styled-components"

const HeaderEstilizado = styled.header`
    padding: 60px;
    display: flex;
    justify-content: space-between;
    img{
        width: 212px;
        height: 65px;
        top: 60px;
        left: 24px;
        gap: 0px;
        opacity: 0px;
    }
`

const Cabecalho = () => {
    return(
        <HeaderEstilizado>
            <img src="../public/imagens/logo.png" alt="logo"/>
        </HeaderEstilizado>
    )
}

export default Cabecalho