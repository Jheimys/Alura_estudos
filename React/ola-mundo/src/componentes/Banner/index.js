import styles from './Banner.module.css'

import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/avatar2-removebg.png'

export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresetacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou James Bassani, desenvolvedor front-end com experiência em desenvolvimento web. Minhas principais tecnologias são: HTML, CSS, Javascript, NodeJS e React. Tenho grande interesse em expandir minhas habilidades e conhecimentos em tecnologias emergentes. Atualmente, além das tecnologias citadas a cima venho me dedicando ao SAB ABAP e a Data Science.
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