import { useState } from "react"


const contador = () => {
    const [valor, setValor] = useState(0)

    function somaValor(){
        setValor(valor + 1)
    }

    function diminuiValor(){
        setValor(valor - 1)
    }

    return(
        <div>
            <h1>Contador</h1>
            <div> Valor: {valor} </div>
            <button onClick={diminuiValor}> - </button>
            <button onClick={somaValor}> + </button>
        </div>
    )
}

export default contador