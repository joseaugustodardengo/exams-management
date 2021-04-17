# Exams Management

A aplicação é um simples repositório para gerenciar provas e suas questões

<h2 id="como-executar-o-projeto"> 🚀 Como executar o projeto </h2>

### Pré Requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/), [Insominia](https://insomnia.rest/download). 

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) <br/> <br/>
Após ter feito a configuração de instalação na máquina é necessário fazer o download do repostiório [aqui](https://github.com/joseaugustodardengo/exams-management/archive/master.zip)
ou realizar o clone do repositório.
```
git clone https://github.com/joseaugustodardengo/exams-management
```
Após feito o download, só seguir os passos a seguir no terminal do seu sistema operacional, para conseguir executar os serviços da aplicação.

#### 🧭 Rodando a aplicação

```bash

# Acesse a pasta do projeto no seu terminal/cmd
$ cd exams-management

# Instale as dependências com npm ou yarn
$ npm install
$ yarn

# Em outro terminal, mas no mesmo diretório, execute a aplicação com npm ou yarn
$ npm run start
$ yarn start

# Em outro terminal, mas no mesmo diretório, execute a aplicação com npm ou yarn, para criar as migrations após ter configurado o ambiente do docker que está no arquivo .env
$ npm run typeorm migration:run
$ yarn typeorm migration:run

# A aplicação será aberta na porta:3333 - acesse http://localhost:3333
```
Caso queira, pode executar a aplicação através do Insominia no botão logo abaixo.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=exams-management&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fjoseaugustodardengo%2Fexams-management%2Fmain%2Fexport.json)
---

## Rotas da aplicação
* A aplicação executa em http://localhost/3333
* ```/exams -> utilizando o método GET nessa rota irá listar todas as provas ```

* ```/exams -> utilizando o método POST nessa rota criará uma prova ```

* ```/exams/1 -> utilizando o método PUT nessa rota irá alterar um exame de acordo com o id que foi informado```

* ```/exams/1 -> utilizando o método DELETE nessa rota irá excluir uma prova de acordo com o id que foi informado```

* ```/questions -> utilizando o método POST nessa rota irá criar uma question ```

* ```/questions -> utilizando o método GET nessa rota irá listar todas as questions ```

* ```/questions/1 -> utilizando o método PUT nessa rota irá alterar uma question de acordo com o id que foi informado```

* ```/questions/1 -> utilizando o método DELETE nessa rota irá excluir a question de acordo com o id que foi informado```

---

<h2 id="tecnologias"> 🛠 Tecnologias </h2>

As seguintes ferramentas foram usadas na construção do projeto:
* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Typeorm](https://typeorm.io/#/)
* [Express](https://expressjs.com/)
* [ESLint](https://eslint.org/)
* [Nodemon](https://nodemon.io/)

---

<h2 id="autor"> Autor </h2>
<img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/60450451?s=460&u=b5f6c306e7760f9d0b89839c5e0b6b105db684a0&v=4" width="100px;" alt=""/>

Feito por **José Augusto Franco Dardengo** <br/>
👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-José-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jose-augusto-franco-dardengo/)](https://www.linkedin.com/in/jose-augusto-franco-dardengo/) 
[![Gmail Badge](https://img.shields.io/badge/-jfrancodardengo@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jfrancodardengo@gmail.com)](mailto:jfrancodardengo@gmail.com)
