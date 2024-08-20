import styles from'../../../styles/Jogos.module.css'
import { useEffect, useState } from "react";
import Porta from "../../../conponents/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import Link from 'next/link';
import { useRouter } from 'next/router';
import PortaModel from '../../../model/porta';

const jogo = () => {

  const router = useRouter()
  const [ portas, setPortas ] = useState<PortaModel[]>([])

  useEffect(() => {

    const portas = router.query.portas ? +router.query.portas : 0;
    const temPresente = router.query.temPresente ? +router.query.temPresente : 0;
    
    setPortas(criarPortas(portas, temPresente))

  }, [router?.query])

  console.log(router?.query)

  function renderizarPortas(){
    return portas.map(porta => {
      return <Porta 
          key={porta.numero} 
          value = {porta} 
          onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} 
      />
    })
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}

export default jogo