import styles from "../styles/linha.module.css"
import Subdivisao from "./subdivisao"

const Linha = (props) => {
    
    return(
        <div className={styles.linha}>
            <Subdivisao preta = {props.preta}/>
            <Subdivisao preta = {!props.preta} />
            <Subdivisao preta = {props.preta}/>
            <Subdivisao preta = {!props.preta} />
            <Subdivisao preta = {props.preta}/>
            <Subdivisao preta = {!props.preta} />
            <Subdivisao preta = {props.preta}/>
            <Subdivisao preta = {!props.preta} />
        </div>
    )
}

export default Linha