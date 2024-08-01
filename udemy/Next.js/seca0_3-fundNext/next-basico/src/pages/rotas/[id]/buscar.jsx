import { useRouter } from "next/router"

const buscar = () => {

    const router = useRouter()
    console.log(router)

    const id = router.query.id
    const nome = router.query.nome

    return(
        <div>
            <h1>Rotas / {id} /{nome}</h1>
        </div>
    )
}

export default buscar