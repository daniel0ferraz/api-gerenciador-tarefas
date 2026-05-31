# API de Gerenciamento de Tarefas

Projeto desenvolvido para a disciplina **Projeto de Extensão em Web Backend**.

A aplicação consiste em uma API REST desenvolvida com Node.js e Express para gerenciamento de tarefas.

---

# Objetivo do Projeto

Muitas pessoas possuem dificuldade em organizar tarefas e acompanhar atividades do dia a dia.

Pensando nisso, foi desenvolvida uma API capaz de:

* cadastrar tarefas
* listar tarefas
* atualizar tarefas
* concluir tarefas
* remover tarefas

O projeto possui aplicabilidade prática, podendo ser utilizado futuramente em aplicativos de produtividade e organização pessoal.

---

# Tecnologias Utilizadas

* Node.js
* Express
* UUID
* JavaScript
* API REST
* Vercel

---

# Estrutura do Projeto

```bash
api-gerenciador-tarefas/
│
├── api/
│   └── index.js
│
├── package.json
├── vercel.json
└── README.md
```

---

# Como Usar

## Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd unicarioca_dev_api
```

2. Instale as dependências:
```bash
npm install
```

## Iniciando o Servidor

Para iniciar o servidor em modo desenvolvimento:
```bash
npm run dev
```

O servidor estará disponível em: **http://localhost:3000**

A documentação interativa (Swagger) estará em: **http://localhost:3000/docs**

---

# Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/` | Redireciona para `/docs` |
| GET | `/tarefas` | Lista todas as tarefas |
| POST | `/tarefas` | Cria uma nova tarefa |
| PUT | `/tarefas/:id` | Atualiza uma tarefa |
| PATCH | `/tarefas/:id/concluir` | Marca uma tarefa como concluída |
| DELETE | `/tarefas/:id` | Remove uma tarefa |

---

# Como Executar o Projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/api-gerenciador-tarefas.git
```

---

## 2. Entrar na pasta

```bash
cd api-gerenciador-tarefas
```

---

## 3. Instalar dependências

```bash
npm install
```

---

## 4. Executar o projeto

```bash
npm run dev
```

---

# Servidor Local

```bash
http://localhost:3000
```

---

# Deploy

Projeto hospedado na Vercel.

Exemplo:

```bash
https://api-gerenciador-tarefas.vercel.app
```

---

# Rotas da API

## Teste inicial

### GET /

Retorna mensagem informando que a API está funcionando.

### Resposta

```json
{
  "mensagem": "API funcionando"
}
```

---

# Listar tarefas

## GET /tarefas

Retorna todas as tarefas cadastradas.

### Exemplo de resposta

```json
[
  {
    "id": "123",
    "titulo": "Estudar Node.js",
    "descricao": "Aprender Express",
    "concluida": false
  }
]
```

---

# Criar tarefa

## POST /tarefas

### Body

```json
{
  "titulo": "Estudar backend",
  "descricao": "Aprender APIs REST"
}
```

### Resposta

```json
{
  "id": "123",
  "titulo": "Estudar backend",
  "descricao": "Aprender APIs REST",
  "concluida": false
}
```

---

# Atualizar tarefa

## PUT /tarefas/:id

### Body

```json
{
  "titulo": "Backend atualizado",
  "descricao": "Nova descrição"
}
```

---

# Concluir tarefa

## PATCH /tarefas/:id/concluir

Marca uma tarefa como concluída.

---

# Remover tarefa

## DELETE /tarefas/:id

Remove uma tarefa pelo ID.

---

# Como Testar

A API pode ser testada utilizando:

* Postman
* Insomnia
* Thunder Client

---

# Exemplo de Fluxo de Teste

## 1. Criar tarefa

```http
POST /tarefas
```

---

## 2. Listar tarefas

```http
GET /tarefas
```

---

## 3. Atualizar tarefa

```http
PUT /tarefas/:id
```

---

## 4. Concluir tarefa

```http
PATCH /tarefas/:id/concluir
```

---

## 5. Remover tarefa

```http
DELETE /tarefas/:id
```

---

# Apresentação do Projeto

## Introdução

Olá professor.

Meu nome é Daniel Ferraz Coelho.

O projeto desenvolvido para a disciplina Projeto de Extensão em Web Backend consiste em uma API REST para gerenciamento de tarefas.

A aplicação foi desenvolvida utilizando Node.js e Express.

---

# Problema Identificado

Muitas pessoas possuem dificuldade em organizar atividades do dia a dia e acompanhar tarefas pendentes.

Pensando nisso, foi desenvolvida uma API capaz de cadastrar, listar, atualizar, concluir e remover tarefas.

---

# Tecnologias Utilizadas

As principais tecnologias utilizadas foram:

* Node.js
* Express
* UUID
* API REST
* Vercel para deploy da aplicação

---

# Estrutura do Projeto

O projeto foi organizado de forma simples para facilitar manutenção e entendimento.

A aplicação possui:

* arquivo principal da API
* rotas REST
* validações
* manipulação de dados

---

# Explicação dos Métodos HTTP

## GET

Utilizado para listar informações.

## POST

Utilizado para criar novas tarefas.

## PUT

Utilizado para atualizar tarefas.

## PATCH

Utilizado para alterar parcialmente uma tarefa.

## DELETE

Utilizado para remover tarefas.

---

# Demonstração

Durante a apresentação serão demonstrados:

* criação de tarefa
* listagem de tarefas
* atualização
* conclusão de tarefa
* remoção

Todos os testes serão realizados utilizando o Postman.

---

# Conclusão

Com este projeto foi possível aplicar os principais conceitos estudados na disciplina, como:

* criação de APIs REST
* utilização de métodos HTTP
* organização backend
* deploy de aplicações
* manipulação de dados

O projeto também pode ser expandido futuramente com autenticação de usuários e banco de dados.

---

# Autor

Daniel Ferraz Coelho

---

# Links Úteis

## Node.js

[https://nodejs.org](https://nodejs.org)

## Express

[https://expressjs.com](https://expressjs.com)

## Vercel

[https://vercel.com](https://vercel.com)

## Postman

[https://www.postman.com](https://www.postman.com)
