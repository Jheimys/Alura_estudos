import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Params(){
    const router = useRouter()
    console.log(router)

    const nome = router.query.nome
    const id = router.query.id 

    return(
        <div>
            <h1>Rotas Params: nome: {nome}, id: {id}</h1>
            <Link href="/rotas">
                <button> Voltar </button>
            </Link>
        </div>
    )
}