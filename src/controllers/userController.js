// acessa o template do banco de dados para usuários
const userSchema = require('../models/userSchema')
// inicia o bcrypt para criptografar senhas
const bcrypt = require("bcrypt")

// função para exibir todos os usuarios cadastrados
const exibeUsers = async (req, res) => {
    try{
        // find vazio para buscar todos os resultados
        const todosUsers = await userSchema.find()
        // exibe os resultados
        res.status(200).json(todosUsers)
    }catch(error) {
        res.status(500).send({
            message: error.message
        })
    }
}

// função para criar um novo usuário
const criarUser = async (req,res) => {
    /* pega a senha informada no body e usa a função do bcrypt hashsync
     para converter em uma string hasheada*/
     console.log(req.body.password)
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    console.log(hashedPassword)
    
    // devolve a senha hasheada para a variável senha do body
    req.body.password = hashedPassword

    // checa se o email informado ja existe no banco de dados
    const emailExists = await userSchema.exists({ email: req.body.email })

    // se existe exibe uma mensagem
    if(emailExists) {
        return res.status(409).send({
            message: 'Conflito: email já cadastrado',
        })
    }

    try{
        // cria um novo usuário usando o userSchema e a senha hasheada
        const newUser = new userSchema(req.body)

        // salva no banco
        const savedUser = await newUser.save()
        // executa e exibe o feedback
        res.status(201).send({
            savedUser,
            message: 'Usuário criado com sucesso',
        })
    }catch(error){
        res.status(500).send({
            message: error.message
        })
    }
}
// exporta as funções criadas
module.exports = {
    exibeUsers,
    criarUser
}