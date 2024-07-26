import Titulo from '../../components/Titulo'



const usandoTitulo = () => {
    return(
        <div>
            <Titulo 
                principal = "Página de cadastro"
                secundario = "atualizar"
            />

            <Titulo 
                principal = "Página de login"
                secundario = "excluir"
                pequeno
            />
        </div>
    )
}

export default usandoTitulo