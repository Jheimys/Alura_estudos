import { memo } from "react"

function Pessoa({ nome, deletar, id }) {
    console.log(`pessoa ${nome} renderizado`)
    return(
        <li  className="box mb-3">
            {nome}

            <button  onClick={() => deletar(id)} className="button is-danger ml-2">
                Me delete!
            </button>
        </li>
    )
}


export default memo(Pessoa)