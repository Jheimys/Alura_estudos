import { useState } from "react"


const mouse = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const estilo = {
        display:"flex",
        justifyContent: "center",
        flexDirection:"column",
        alignItems: 'center',
        backgroundColor: '#222',
        color:"#fff",
        height: "100vh",
    }

    function quandoMover(e){
        setX(e.clientX)
        setY(e.clientY)
    }

    return(
        <div style={estilo} onMouseMove={quandoMover}>
            <h1>Eixo X: {x} </h1>
            <h1>Eixo Y: {y} </h1>
        </div>
    )
}

export default mouse