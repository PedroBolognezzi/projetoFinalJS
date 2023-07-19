// acessa o app
const app = require('./src/app')
// acessa a porta do env
const PORT = process.env.PORT;

//escuta a porta e exibe mensagem no console quando inicia 
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))