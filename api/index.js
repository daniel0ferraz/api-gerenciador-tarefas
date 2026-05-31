const express = require("express");
const crypto = require("crypto");
const path = require("path");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Gerenciador de Tarefas",
      version: "1.0.0",
      description: "API REST desenvolvida com Node.js e Express",
    },
  },
  apis: [path.join(__dirname, "index.js")],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

let tarefas = [];

/**
 * @swagger
 * /:
 *   get:
 *     summary: Redireciona para documentação
 *     responses:
 *       302:
 *         description: Redirecionado para /docs
 */
app.get("/", (req, res) => {
  res.redirect("/docs");
});

/**
 * @swagger
 * /tarefas:
 *   get:
 *     summary: Lista todas as tarefas
 *     responses:
 *       200:
 *         description: Lista de tarefas
 */
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

/**
 * @swagger
 * /tarefas:
 *   post:
 *     summary: Cria uma nova tarefa
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Tarefa criada
 */
app.post("/tarefas", (req, res) => {
  const { titulo, descricao } = req.body;

  if (!titulo || titulo.trim() === "") {
    return res.status(400).json({
      erro: "O título é obrigatório",
    });
  }

  if (!descricao || descricao.trim() === "") {
    return res.status(400).json({
      erro: "A descrição é obrigatória",
    });
  }

  const novaTarefa = {
    id: crypto.randomUUID(),
    titulo,
    descricao,
    concluida: false,
    criadaEm: new Date(),
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
});

/**
 * @swagger
 * /tarefas/{id}:
 *   put:
 *     summary: Atualiza uma tarefa existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Tarefa atualizada
 *       404:
 *         description: Tarefa não encontrada
 */
app.put("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, descricao } = req.body;

  const tarefa = tarefas.find((t) => t.id === id);

  if (!tarefa) {
    return res.status(404).json({
      erro: "Tarefa não encontrada",
    });
  }

  tarefa.titulo = titulo;
  tarefa.descricao = descricao;

  res.json(tarefa);
});

/**
 * @swagger
 * /tarefas/{id}/concluir:
 *   patch:
 *     summary: Conclui uma tarefa existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarefa concluída
 *       404:
 *         description: Tarefa não encontrada
 */
app.patch("/tarefas/:id/concluir", (req, res) => {
  const { id } = req.params;

  const tarefa = tarefas.find((t) => t.id === id);

  if (!tarefa) {
    return res.status(404).json({
      erro: "Tarefa não encontrada",
    });
  }

  tarefa.concluida = true;

  res.json(tarefa);
});




app.delete("/tarefas/:id", (req, res) => {
  const { id } = req.params;

  tarefas = tarefas.filter((t) => t.id !== id);

  res.json({
    mensagem: "Tarefa removida",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Swagger disponível em http://localhost:${PORT}/docs`);
});

module.exports = app;
