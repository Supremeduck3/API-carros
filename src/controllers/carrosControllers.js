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
    const{}
}
export {getAllcarros, getCarrosByid}