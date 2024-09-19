import { Request, Response } from 'express'

import questoes from '../bancoDeQuestões'

export default (req: Request, res: Response) => {
    res.status(200).json(questoes[0])
}