import { Request, Response } from "express"
import questoes from "../bancoDeQuestões"
import { embaralhar } from "@/function/arrays"

export default(req: Request, res: Response) => {
    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}