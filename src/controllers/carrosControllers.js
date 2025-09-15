import { parse } from "dotenv"
import dados from "../models/dados.js"
const {carros} = dados

const getAllcarros = (req,res)=> {
    res.status(200).json({
        total: carros.length,
        carros:carros
    })
}
const getCarrosByid = (req,  res) => {
    let id = req.params.id;
    id = parseInt(id)

    const carro = carros.find(c => c.id === id);

    if(!carro){
        res.status(404).json({
            sucess:false,
            messsage:`Não existe barbie com esse id ${id}`
        })
    }
    res.status(200).json({
        total:carros.length,
        carros:carros
    })
}
const createCarro = (req, res)=>{
    const{ modelo, nome, ano, cor, qtdevitorias} = req.body
    if(!nome || ano || modelo){
        return res.status(400).json({
            sucess: false,
            messsage:"Nome, ano e modelo são obrigatorios para criar o carro"
        })
    }
    const novocarro = {
        id: carros.length+1,
        modelo:modelo,
        nome:nome,
        ano:parseInt(ano),
        cor:cor,
        qtdevitorias:parseInt(qtdevitorias)
    }
    carros.push(novocarro)
    res.status(201).json({
        sucess:true,
        messsage:"Seu carro foi criado com sucesso!",
        carro:novocarro
    })
}
export {getAllcarros, getCarrosByid}