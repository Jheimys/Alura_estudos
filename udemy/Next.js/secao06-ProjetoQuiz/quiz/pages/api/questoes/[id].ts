import { Request, Response } from 'express'

import questoes from '../bancoDeQuestões'

export default (req: Request, res: Response) => {
    const idSelecionado = req.query.id ? +req.query.id : null

    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

    if(unicaQuestaoOuNada.length === 1){
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        res.status(200).json(questaoSelecionada.paraObjeto())
    } else {
        res.status(204).send()
    }
}