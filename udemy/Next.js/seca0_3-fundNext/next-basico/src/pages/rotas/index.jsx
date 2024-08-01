import Link from "next/link"

function index() {
    
  return (
    <div>
        <h1>Rota index</h1>
        <ul>
            <Link href="/rotas/params/id=123&nome=Ana">
                <ul>
                    Params
                </ul>
            </Link>
        </ul>

    </div>

  )
}

export default index