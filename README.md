GET(/lista)
Retorna todos os animes
Resposta: HTTP 200 OK
[
	{
		"_id": "64b9bb32df4831a9a5ce5f34",
		"nome": "one piece",
		"autor": "eiichiro oda",
		"genero": "shonen",
		"createAt": "2023-07-20T22:53:50.739Z",
		"__v": 0
	}
]________________________________________
POST(/novoanime)
Cadastra um novo anime
Requer body, ex:
 [
	{
		"nome": "one piece",
	    "autor": "eiichiro oda",
        "genero": "shonen",
        "QtdeEpisodios": 1070
	}
] 
Resposta: HTTP: 201 CREATED
{
	"Anime": {
		"nome": "one piece",
		"autor": "eiichiro oda",
		"genero": "shonen",
		"createAt": "2023-07-20T23:01:44.163Z",
		"_id": "64b9bcdc40556625075c5c48",
		"__v": 0
	}

}
________________________________________
DELETE(/deletarAnime/:id)
Deleta um anime apartir do id informado

Resposta: HTTP: 200 OK
{
	"message": "anime deletado"
}
PATCH(/alterarAnime/:id)
Altera um anime especifico a partir do id informado
Requer body do anime, ex:
{
	"nome": "one",
	"autor": "oda",
  "genero": "nen",
  "QtdeEpisodios": 1070
}
Resposta: HTTP 200 OK, com o body informado 
________________________________________
GET(/listaUsuarios)
Lista todos os usuarios cadastrados

Retorna todos os animes
Resposta: HTTP 200 OK
[
	{
		"_id": "64b9cb087d5417b3bdff4875",
		"nome": "Pedro",
		"email": "pedro2@gmail.com",
		"password": "Coxinha123",
		"createdAt": "2023-07-21T00:02:13.864Z",
		"__v": 0
	}
]

POST(/novoUsuario)
Cadastra um novo usuario
requer body, EX:
	{
		"nome": "Pedro3",
		"email": "pedro3@gmail.com",
		"password": "Coxinha123"
	}

Resposta: HTTP: 201 CREATED
{
	"savedUser": {
		"nome": "Pedro3",
		"email": "pedro3@gmail.com",
		"password": "$2b$10$psUxN2C0nl4n/nbAFwsOeuJCxn.vb6oQGh/WNKKSr./ajhwBZEiR6",
		"createdAt": "2023-07-21T00:09:34.277Z",
		"_id": "64b9ccc719c19d52ca4a46ab",
		"__v": 0
	},
	"message": "Usuário criado com sucesso"
}

POST(/login)
Realiza o login do usuario

requer body para login, EX:
{
	"email": "pedro3@gmail.com",
    "password": "Coxinha123"
}

resposta: HTTP: 200 OK
{
	"message": "Login efetuado com sucesso",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODk4OTgxOTd9.q60ELdk3qpbgEkKzEzDd0NrA9EOgMA4LGEXaWQ9rMfw"
}
Arquitetura do projeto
📂 projetoFinalJs
├─ 📂 src
│ ├─ 📂 controllers
| | └─ animeControllers.js
│ │ └─ authControllers.js
│ │ └─ userControllers.js
│ ├─ 📂 database
│ │ └─ mongoConfig.js
│ ├─ 📂 models
│ │ └─ clienteSchema.js
│ ├─ 📂 middlewares
│ │ └─ auth.js
│ ├─ 📂 routes
│ │ └─ animeRoutes.js
│ └─ app.js
├─ package-lock.json
├─ package.json
├─ .gitignore
├─ .env
├─ README.md 
________________________________________
"dependencies":
    "bcrypt": "^5.1.0",
    "cors": "^2.8.5",
    "dotenv-safe": "^8.2.0",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.1",
    "mongoose": "^7.3.4"

