import PostModelo from "componentes/PostModelo";

import styles from './SobreMim.module.css'

import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/projTa.jpeg'

export default function SobreMim() {
    return(
       <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre mim'
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou James!
            </h3>

            <img 
                src={fotoSobreMim}
                alt='foto do autor'
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Possuo mais de 10 anos de experiência em coordenação de equipe e ensino de matemática.
                Tenho dois bacharelados, um em Sistema de Informação, e outro em Matemática, área na qual
                também sou mestre pela Universidade Federal do Espírito Santo. Sou casado, pai de dois filhos, e em
                meu tempo livre, além de aproveitar com minha família, eu pratico música e frequento um dojo de jiujitsu.
            </p>

            <p className={styles.paragrafo}>
                Sou um entusiasta por novas tecnologias e possuo conhecimentos avançados em JavaScript e suas
                diversas frameworks, tanto de front-end como de back-end. Minha principal stack de atuação é Node
                com React.
            </p>

            <p className={styles.paragrafo}>
                Destaco, ainda, que minha experiência como coordenador de equipe e professor de matemática me ajudou a desenvolver habilidades 
                como liderança, comunicação e gestão de projetos. Possuo uma visão estratégica para enfrentar desafios e
                encontrar soluções inovadoras. Acredito que minha combinação de habilidades e experiências agregam
                um valor significativo aos projetos em que trabalho.    
            </p>

       </PostModelo>
    )
}