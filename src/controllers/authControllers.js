const UserSchema = require('../models/userSchema');
//importa o schema (template do banco de dados) para usuários 
const bcrypt = require('bcrypt');
//importa o bcrypt para criptografar senhas
const jwt = require('jsonwebtoken');
//importa o json web token para gerar tokens

const SECRET = process.env.SECRET;
//importa a SECRET para ser usada pelo JWT na geracao do token

// função de login
const login = async (req, res) => {
    try {
        // busca somente o usuario com o email informado
        const user = await UserSchema.findOne({ email: req.body.email })

        // retorna uma mensagem caso não seja encontrado o usuario
        if (!user) {
            return res.status(404).send({
                message: 'Usuário não encontrado',
                email: `${req.body.email}`
            });
        }

        // verifica se a senha esta correta utilizando uma função interna do bcrypt
        const validPassword = bcrypt.compareSync(req.body.password, user.password)

        // exibe uma mensagem se a senha estiver incorreta
        if(!validPassword){
            return res.status(401).send({
            message: "Senha invalida",
            statusCode: 401
            })
        }
        // gera um token utilizando email e senha informado

        //sintaxe: jwt.sign(nome do usuário, SEGREDO)
        // devolte o token se tudo der certo
        const token = jwt.sign({name: user.name}, SECRET);
            console.log("Token gerado: ", token)
            res.status(200).send({
                message: "Login efetuado com sucesso",
                token
            })
    }catch(erro){
        console.error(erro)
    }
}

module.exports ={
    login
}