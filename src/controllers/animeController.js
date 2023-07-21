// acessa o mongoose
const mongoose = require("mongoose")
// acessa o schema/template para o banco de dados dos animes
const animeSchema = require("../models/animeSchema")

//Função para exibir todos os animes cadastrados
const exibirTodos = async(req,res) =>{
    //cria uma variável vazia 
    let query = { }
    try{
        // find da variável vazia retorna todo o banco no mongoDB
        const todosResultados = await animeSchema.find(query)
        //exite todo o banco
        res.status(200).json(todosResultados)
    }catch (error) {
        res.status(500).json({
            message: error.message
        })// caso ocorra um erro exibe uma mensagem
    }
}

// função para cadastrar um novo anime
const cadastrarAnime = async(req,res)=>{
    try{
        // acessa os dados do anime do body
        const {nome, autor, genero, qtdeEpisodios} = req.body
        // cria uma nova entrada no banco usando o modelo do schema
        const novoAnime = new animeSchema({
            nome: nome,
            autor: autor,
            genero: genero,
            qtdeEpisodios: qtdeEpisodios
        })
        // salva no banco o novo anime
        const salvaAnime = await novoAnime.save()
        // retorna o feedback e salva
        res.status(201).json({
            Anime: salvaAnime
        })
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

// função para deletar um anime do banco de dados
const deletaAnime = async(req,res) =>{
    try{
        // encontra o anime a partir do id informado
        const resultadoBusca = await animeSchema.findById(req.params.id)
        // quando encontrado, deleta somente o anime informado
        await resultadoBusca.deleteOne()
        // feedback informando que foi deletado com sucesso
        res.status(200).json({
            message:"Anime deletado"
        })
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

// função para alterar 1 ou mais informações de um anime a partir do id informado
const alterarAnime = async(req,res) =>{
        // encontra o anime apartir do id informado
        const resultadoBusca = await animeSchema.findById(req.params.id)
        const { nome, autor, genero, qtdeEpisodios } = req.body
        // caso o id informado não exista, exibe uma mensagem
        if (!resultadoBusca){
            return res.status(404).send({
                message: "Id informado não encontrado!"
            })
        }
        if(nome) resultadoBusca.nome=nome
        if(autor) resultadoBusca.autor=autor
        if(genero) resultadoBusca.genero=genero
        if(qtdeEpisodios) resultadoBusca.qtdeEpisodios=qtdeEpisodios

        const salvarAnime = await resultadoBusca.save()
        res.status(200).json({resultadoBusca: salvarAnime})
    }
// exporta toda as funções criadas
module.exports={
    exibirTodos,
    cadastrarAnime,
    deletaAnime,
    alterarAnime
}
