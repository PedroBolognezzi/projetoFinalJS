// importa dependencia e inicializa o router
const express = require("express");
const router = express.Router();

/* acessa os controllers
anime cuida dos animes cadastrados,
user cuida do gerenciamento dos usuários,
auth cuida da autenticação */
const animeController = require("../controllers/animeController")
const userController = require("../controllers/userController")
const authController = require("../controllers/authControllers")

//rotas comuns
router.get("/lista", animeController.exibirTodos)
router.post("/novoanime", animeController.cadastrarAnime)
router.delete("/deletarAnime/:id", animeController.deletaAnime)
router.patch("/alterarAnime/:id", animeController.alterarAnime)

// rotas de autenticação
router.get("/listaUsuarios", userController.exibeUsers)
router.post("/novoUsuario", userController.criarUser)
router.post("/login", authController.login)
//exporta o router
module.exports = router;
