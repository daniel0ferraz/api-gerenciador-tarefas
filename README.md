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
* JavaScript
* API REST
* Vercel

---

# Estrutura do Projeto

```bash
api-gerenciador-tarefas/
│
├── api/
│   ├── index.js
│   └── public/
│       └── docs.html
│
├── package.json
├── vercel.json
├── .gitignore
└── README.md
```

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

# Documentação da API

A documentação visual da API pode ser acessada em:

```bash
http://localhost:3000/docs
```

Deploy online:

```bash
https://api-gerenciador-tarefas.vercel.app/docs
```

---

# Deploy

Projeto hospedado na Vercel.

URL da aplicação:

```bash
https://api-gerenciador-tarefas.vercel.app
```

---

# Endpoints da API

| Método | Rota                    | Descrição                   |
| ------ | ----------------------- | --------------------------- |
| GET    | `/`                     | Redireciona para `/docs`    |
| GET    | `/tarefas`              | Lista todas as tarefas      |
| POST   | `/tarefas`              | Cria uma nova tarefa        |
| PUT    | `/tarefas/:id`          | Atualiza uma tarefa         |
| PATCH  | `/tarefas/:id/concluir` | Marca tarefa como concluída |
| DELETE | `/tarefas/:id`          | Remove uma tarefa           |

---

# Exemplos de Uso

## Criar tarefa

### POST `/tarefas`

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

## Listar tarefas

### GET `/tarefas`

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

## Atualizar tarefa

### PUT `/tarefas/:id`

```json
{
  "titulo": "Backend atualizado",
  "descricao": "Nova descrição"
}
```

---

## Concluir tarefa

### PATCH `/tarefas/:id/concluir`

```json
{
  "mensagem": "Tarefa concluída com sucesso"
}
```

---

## Remover tarefa

### DELETE `/tarefas/:id`

```json
{
  "mensagem": "Tarefa removida com sucesso"
}
```

---

# Validações Implementadas

A API possui validações para:

* título obrigatório
* descrição obrigatória
* verificação de tarefa existente
* tratamento de erro 404

---

# Como Testar

A API pode ser testada utilizando:

* Postman
* Insomnia
* Thunder Client

---

# Conceitos Aplicados

Durante o desenvolvimento foram utilizados conceitos importantes de backend, como:

* rotas REST
* métodos HTTP
* middleware
* manipulação de JSON
* validações
* organização de API
* deploy em nuvem

---

# Apresentação do Projeto

Durante a apresentação serão demonstrados:

* criação de tarefas
* listagem de tarefas
* atualização de tarefas
* conclusão de tarefas
* remoção de tarefas
* documentação HTML da API
* deploy funcionando na Vercel

---

# Melhorias Futuras

O projeto pode evoluir futuramente com:

* banco de dados
* autenticação de usuários
* login com JWT
* integração com frontend
* persistência de dados
* filtros de tarefas

---

# Autor

Daniel Ferraz Coelho

Projeto acadêmico desenvolvido para a disciplina:

**Projeto de Extensão em Web Backend**
