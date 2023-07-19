// importa dependencia e inicializa o router
const express = require("express");
const router = express.Router();

/* acessa os controllers
anime cuida dos animes cadastrados,
user cuida do gerenciamento dos usuários,
auth cuida da autenticação */
const animeController = require("../controllers/animeController")

//rotas comuns
router.get("/lista", animeController.exibirTodos)
router.post("/novoanime", animeController.cadastrarAnime)
router.delete("/deletarAnime/:id", animeController.deletaAnime)
//exporta o router
module.exports = router;
