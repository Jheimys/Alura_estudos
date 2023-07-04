import favorito from"./favorito.png"
import open from "./open.png"

export default function Card({item, style}){
    return(
        <li key={item.id} className={style.galeria__card}>
            <img
                className={style.galeria__imagem}
                src={item.imagem}
                alt={item.titulo} 
            />
            <p className={style.galeria__descricao}>{item.titulo}</p>
            <div>
                <p>{item.creditos}</p>
                <span>
                    <img src={favorito} alt="icone de coração curtir" />
                    <img src={open} alt="icone de abrir modal" />
                </span>
            </div>
        </li>
    )    
}