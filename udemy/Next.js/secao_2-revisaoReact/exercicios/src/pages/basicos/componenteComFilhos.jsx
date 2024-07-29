import Itens from "@/components/Itens"
import Lista from "@/components/Lista"


const componenteComFilhos = () => {
    return(
        <div>
            <Lista>
                <Itens conteudo="Item #1"/>
                <Itens conteudo="Item #2"/>
            </Lista>
        </div>
    )
}

export default componenteComFilhos