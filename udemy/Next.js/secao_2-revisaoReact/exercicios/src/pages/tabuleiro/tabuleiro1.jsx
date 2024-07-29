
import styles from'./tabuleiro1.module.css'

const quadradoBranco = <div className={styles.quadradoBranco}></div>
const quadradoPreto = <div className={styles.quadradoPreto}></div>

let linhasTabuleiro = []

const geraLinha = (iniciarComBranco) => {
    let linha = []

    for(let  i = 0; i < 8; i++){
        if(i % 2 === 0){
            linha.push(iniciarComBranco ? quadradoBranco : quadradoPreto)
        } else {
            linha.push(iniciarComBranco ? quadradoPreto : quadradoBranco)
        }
    }

    return linha
}

for(let i = 0; i < 8; i++){
    linhasTabuleiro.push(
        <div>
            {geraLinha(i % 2 === 0)}
        </div>
    )
}

const tabuleiro = () => {


    return(
        <div className={styles.tabuleiroContainer}>
            {linhasTabuleiro}
        </div>
    )
}

export default tabuleiro