//acessa o jsonwebtoken, que é utilizado para criar tokens de acesso
const jwt = require('jsonwebtoken')
// acessa o secret do env
const SECRET = process.env.SECRET;

// *cria uma função de autorização dentro do exports,
exports.checkAuth = (req, res, next) => {
    //checa no header se há autorização
    const authHeader = req.get('authorization');

    /*caso não tenha autorização (por falta do bearer 
     token no header) o sistema não irá permitir acesso
     e ira emitir uma mensagem de aviso*/
    if (!authHeader) {
        return res.status(401).send({
            message: 'sem autorizacao',
            statuscode: 401
        })
    }

    /*Transforma o token completo do header em um array, separando o bearer
    do token pelo espaço para poder acessar somente o token [bearer, token] 
    (bearer é o index 0 e o token o index 1) */
    const token = authHeader.split(' ')[1];

    // exibe um erro caso não haja token
    if (!token) {
        return res.status(401).send({
            message: "erro no token"
        })
    }
    try {
        jwt.verify(token, SECRET, (err) => {
            // caso houver um erro na verificação, retorna uma mensagem de erro
            if (err) {
                return res.status(401).send({
                    message: "Não autorizado"
                })
            }
            /*se estive ok, o programa prossegue para a rota*/
        })
    } catch (err) {
        console.error(err)
    }//exibe o erro se for o caso
}