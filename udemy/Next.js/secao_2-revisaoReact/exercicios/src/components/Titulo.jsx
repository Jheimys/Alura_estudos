

const Titulo = (props) => {
    console.log(props)

    return !props.pequeno ? (
        <>
            <h1>{props.principal}</h1>
            <h2>{props.secundario}</h2>
        </>
    ) : (
        <>
            <p>{props.principal}</p>
            <p>{props.secundario}</p>
        </>
    )
}

export default Titulo