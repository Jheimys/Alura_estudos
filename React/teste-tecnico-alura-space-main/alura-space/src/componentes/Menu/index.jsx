import home from"../../assets/icones/home-ativo.png"
import curtidas from"../../assets/icones/mais-curtidas-inativo.png"
import maisVistas from"../../assets/icones/mais-vistas-inativo.png"
import novas from"../../assets/icones/novas-inativo.png"
import surpreendame from"../../assets/icones/surpreenda-me-inativo.png"

import styles from "./menu.module.scss"


export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.memu__lista}>
        <li className={styles.menu__item}>
          <img src={home} alt="icone de home"/>
          <a href="/">Início</a>
        </li>
      </ul>
      <ul>
        <li className={styles.menu__item}>
          <img src={curtidas} alt="icone de curtidas"/>
          <a href="/">Mais curtidas</a>
        </li>
      </ul>
      <ul>
        <li className={styles.menu__item}>
          <img src={maisVistas} alt="icone das mais vistas"/>
          <a href="/">Mais vistas</a>
        </li>
      </ul>
      <ul>
        <li className={styles.menu__item}>
          <img src={novas} alt="icone das novas"/>
          <a href="/">Novas</a>
        </li>
      </ul>
      <ul>
        <li className={styles.menu__item}>
          <img src={surpreendame} alt="icone de surpreenda-me"/>
          <a href="/">Surpreeda-me</a>
        </li>
      </ul>
    </nav>
  )
}

