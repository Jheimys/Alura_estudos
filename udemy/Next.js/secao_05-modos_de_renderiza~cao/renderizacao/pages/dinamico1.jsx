export function getSeverSideProps(){
    console.log('[server] gerando props para o componente .....')
    return{
        props:{
            numero: Math.random()
        }

    }  
}

export default function Dinamico(props){
    return(
        <>
            <h1>Dinâmico #01</h1>
            <h2>{props.numero}</h2>
        </>
    )
}