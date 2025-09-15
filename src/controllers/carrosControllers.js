import { parse } from "dotenv";
import dados from "../models/dados.js";
const { carros } = dados;

const getAllcarros = (req, res) => {
  res.status(200).json({
    total: carros.length,
    carros: carros,
  });
};
const getCarrosByid = (req, res) => {
  let id = req.params.id;
  id = parseInt(id);

  const carro = carros.find((c) => c.id === id);

  if (!carro) {
    res.status(404).json({
      sucess: false,
      messsage: `Não existe barbie com esse id ${id}`,
    });
  }
  res.status(200).json({
    total: carros.length,
    carros: carros,
  });
};
const createCarro = (req, res) => {
  const { modelo, nome, ano, cor, qtdevitorias } = req.body;
  if (!nome || !ano || !modelo) {
    return res.status(400).json({
      sucess: false,
      messsage: "Nome, ano e modelo são obrigatorios para criar o carro",
    });
  }
  const novocarro = {
    id: carros.length + 1,
    modelo: modelo,
    nome: nome,
    ano: parseInt(ano),
    cor: cor,
    qtdevitorias: parseInt(qtdevitorias),
  };
  carros.push(novocarro);
  res.status(201).json({
    sucess: true,
    messsage: "Seu carro foi criado com sucesso!",
    carro: novocarro,
  });
};
const deleteCarro = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({
      sucess: false,
      message: "O id deve ser valido",
    });
  }
  const carroRemovido = carros.find((c) => c.id === id);
  if (!carroRemovido) {
    return res.status(404).json({
      sucess: false,
      message: `Carro com esse id ${id} não existe`,
    });
  }
  const carroFiltrado = carros.filter((carros) => carros.id !== id);
  carros.splice(0, carros.length, ...carroFiltrado);
  return res.status(200).json({
    sucess: true,
    message: `Seu personagem foi removido com sucesso`,
  });
};
const updateCarros = (req, res) => {
    const id = parseInt(req.params.id)
    const { modelo, nome, ano, qtdevitorias,cor} =req.body
    const idParaEditar = id;

    if(isNaN(idParaEditar)){
        return res.status(400).json({
            sucess:false,
            message:"O id deve ser um número"
        })
    }
    const carroExiste = carros.find(carros.id === idParaEditar);
    if(!carroExiste){
        return res.status(404).json({
            success: false,
            message: `Nenhum carro com o id: ${id} não foi encontrada`
        })
    }
const carrosAtualizados = carros.map(c=> c.id === idParaEditar?{
    ...carros,
    ...(nome && {nome}),
    ...(modelo && {modelo}),
    ...(ano && {ano}),
    ...(qtdevitorias && {qtdevitorias}),
    ...(cor && {cor})
}
:carros
);
carros.splice(0,carros.length, ...carrosAtualizados);
const carroEditado = carros.find(c => c.id === idParaEditar)
res.status(200).json({
    sucess: true,
    message: "Os dados foram atualizados com sucesso",
    carro: carroEditado
})
}

export { getAllcarros, getCarrosByid, createCarro, deleteCarro, updateCarros };
