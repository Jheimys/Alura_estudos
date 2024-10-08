export async function getStaticPaths(){
    const res = await fetch(`http://localhost:3000/api/tutores`)
    const ids = await res.json()

    const paths = ids.map(id => (
        {params: {id: `${id}`}}
    ))

    return{
        fallback: false,
        paths   
    }
}

export async function getStaticProps({params}){
    const resp = await fetch(`http://localhost:3000/api/alunos/${params.id}`)
    const aluno = await resp.json()
    return{
        props:{
            aluno
        }
    }
}

export default function AlunoPorId(props){
    const { aluno } = props
    return(
        <div>
            <h1>Detalhes do Aluno</h1>
            <ul>
                <li>{aluno.id}</li>
                <li>{aluno.nome}</li>
                <li>{aluno.email}</li>
            </ul>
        </div>
    )
}