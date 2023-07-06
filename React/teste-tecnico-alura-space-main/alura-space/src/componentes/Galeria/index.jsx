import { useState } from "react";
import Tags from "../Tags";
import Cards from "./Cards";

import fotos from "./fotos.json"
import styles from "./Galeria.module.scss"

export default function Galeria() {

    const [itens, setItens] = useState(fotos)
    const tags = [...new Set(fotos.map((valor) => valor.tag))]

    const filtrarFotos = (tag) => {
        const novasFotos = fotos.filter((foto) => {
            return foto.tag === tag
        })

        setItens(novasFotos)
    }

    return(
        <section className={styles.galeria}>
            <h2>Navege pela galeria</h2>
            <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}/>
            <Cards fotos={itens} styles={styles} />
        </section>
    )
}