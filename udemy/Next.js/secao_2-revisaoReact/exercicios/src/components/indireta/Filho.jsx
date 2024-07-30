

const Filho = (props) => {

    return(
        <div>
            <h1>Filho</h1>
            <button onClick={props.function}>Falar com  o Pai</button>
            <button onClick={() => props.function('Passei no ENEM!')}>Falar com  o Pai #02</button>
        </div>
    )
}

export default Filho