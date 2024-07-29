import listaProduto from "../../../data/listaProduto"

const repeticao2 = () => {

    function redenrizarLinha(){
        return listaProduto.map(produto => {
            return(
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        })
    }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {redenrizarLinha()}
                </tbody>
            </table>
        </div>
    )
}

export default repeticao2