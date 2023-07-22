import styles from './Rodape.module.css'
import { ReactComponent as MarcaReagistrada } from 'assets/marca_registrada.svg'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaReagistrada />
            Desenvolvido por James
        </footer>
    )
}