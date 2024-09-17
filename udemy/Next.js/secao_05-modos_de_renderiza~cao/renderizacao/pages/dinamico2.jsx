export async function getServerSideProps(){
    const resp = await fetch('http://localhost:3000/api/produto')
    const produtos = await resp.json()

    return{
        
        props:{
            produtos
        }
    }
}

export default function Estatico2(props){

    function renderizarProdutos(){
        return props.produtos.map(produto => (
             <li key={produto.id}>
                {produto.id} - {produto.nome} tem preço R$: {produto.preco}
            </li>
        ))
    }

    return(
        <div>
            <h1>Dinamico #02</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
           
        </div>
    )
}