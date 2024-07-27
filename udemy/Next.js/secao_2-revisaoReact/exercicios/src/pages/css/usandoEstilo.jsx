const { default: Estilo } = require("@/components/Estilo")

const usandoEstilo = () => {
    return(

        <div>
            <Estilo numero={3} color="#000"/>
            <Estilo numero={-3} color="#FFF"/>
        </div>
    )
}

export default usandoEstilo