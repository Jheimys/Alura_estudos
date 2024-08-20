import styles from '../styles/Catao.module.css'

interface CartaoPros{
    bgcolor?: string
    children?: any
}

const Cartao = (props: CartaoPros) => {
  return (
    <div className={styles.cartao}
        style={{
            backgroundColor: props.bgcolor ?? '#fff'
        }}
    >
        {props.children}
    </div>
  )
}

export default Cartao