import { useEffect, useState } from "react"

export default function Questoes(){
    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/api/questao/123")
            .then(resp => resp.json())
            .then(setQuestao)
    }, [])

    function redenrizarRespostas(){
        if(questao){
            const resposta = questao.respostas.map(item => {
                return <li key={item}>{item}</li>
            })

            return resposta;
        }

        return false
    }

    return(
        <div>
            <h1>Questões</h1>

            <div>
                <span>{questao?.id}-{questao?.enunciado}</span>
                <ul> {redenrizarRespostas()} </ul>
            </div>
        </div>
    )
}