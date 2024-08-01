import { useRouter } from "next/router"

const params = () => {

    const router = useRouter()
    console.log(router)

    const id = router.query.id
    const nome = router.query.nome

    return(
        <div>
            <h1>Rotas params: {id} e {nome}</h1>
        </div>
    )
}

export default params