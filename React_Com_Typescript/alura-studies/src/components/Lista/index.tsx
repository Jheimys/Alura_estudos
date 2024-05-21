
import { ITarefa } from '../../types/tarefas';
import Item from './Item';

import style from './Lista.module.scss'



function Lista({tarefas}: {tarefas: ITarefa[]}) {
  
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index}
            tarefa = {item.tarefa}
            tempo = {item.tempo}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;