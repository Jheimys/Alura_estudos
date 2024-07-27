
import style from './integracao2.module.css'


const integracao = () => {
    return(
        <div id={style.integracao2} >
            <div className={style.vermelha}>Texto #01</div>
            <div className={style.azul}>Texto #02</div>
            <div className={style.branco}>Texto #03</div>
        </div>
    )
}

export default integracao