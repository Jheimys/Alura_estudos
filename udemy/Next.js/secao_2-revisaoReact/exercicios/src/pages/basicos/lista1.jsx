


const lista1 = () => {
    
    let contador = []

    for(let n = 1; n < 11; n++){
        contador.push(
            <li>
                <span> {n} </span>
            </li>
        )
    }

    console.log(contador)

    return(
        <div>
            <ul>
                {contador}
            </ul>
        </div>
    )
}

export default lista1