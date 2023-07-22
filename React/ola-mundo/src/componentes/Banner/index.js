import styles from './Banner.module.css'

import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresetacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou James Bassani...
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt='circulo colorido'
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do autor'
                />
            </div>
        </div>
    )
}