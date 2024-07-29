
const render = () => {
    const listaAprovados = ['Daniel',  'Carlos', 'Maria', 'João', 'James', 'Pedro', 'Elisa']

    function redenrizarLista(){
      return listaAprovados.map((nome, i) => <li key={i}> {nome} </li>)
    }

    return(
        <div>
            <ul>
                {redenrizarLista()}
            </ul>
        </div>
    )
}

export default render



// function redenrizarLista(){
//     let itens = []

//     for(let i = 0; i < listaAprovados.length; i++ ){
//         itens.push(
//             <li>{listaAprovados[i]}</li>
//         )
//     }

//     return itens
// }
