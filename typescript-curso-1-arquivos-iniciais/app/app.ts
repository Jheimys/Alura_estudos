import { validator } from "../../../node_modules/sequelize/types/lib/utils/validator-extras";
import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100)

console.log(negociacao)



