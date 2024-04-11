import { useRouter } from 'next/router'

export default function Buscar() {
    const router = useRouter()

    const id = router.query.id

    console.log(router)

    return(
     <div>
         <h1>Rotas/ {id} / buscar</h1>
     </div>
    ) 
}