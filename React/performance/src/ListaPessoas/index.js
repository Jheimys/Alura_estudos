import { useCallback, useState } from "react";
import Pessoa from "../Pessoa";
import { Faker, faker, pt_PT } from '@faker-js/faker'


const customFaker = new Faker({ locale: [pt_PT] })


export default function ListaPessoas(){
    const [pessoas, setPessoas] = useState([
        {
            nome:'Maria',
            id: faker.string.uuid(),
        },

        {
            nome:'João',
            id: faker.string.uuid(),
        }
    ])

    const deletarPessoas = useCallback((id) => {
        setPessoas(listaAnterior => listaAnterior.filter((pessoa, indexAnterior) => 
        pessoa.id !== id)
    )},[])

    return(
        <div className="has-text-centered">
            <ul>
                {pessoas.map((pessoa, index) => (
                    <Pessoa key={pessoa.id} nome={pessoa.nome} id={pessoa.id} deletar={deletarPessoas}/>
                ))}
            </ul>

            <button
                className="button is-primary is-outlined"
                onClick={() => setPessoas(listaAnterior => ([...listaAnterior, {
                    nome: customFaker.person.firstName(),
                    id: faker.string.uuid()
                }]))}
            >
                Adicionar pessoas
            </button>

        </div>
    )
}