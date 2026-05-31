const express = require("express");
const crypto = require("crypto");
const path = require("path");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

app.use(express.json());

// Configuração Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Gerenciador de Tarefas",
      version: "1.0.0",
      description:
        "API REST desenvolvida com Node.js, Express e documentação Swagger para gerenciamento de tarefas.",
    },
    tags: [
      {
        name: "Tarefas",
        description: "Gerenciamento de tarefas",
      },
    ],
  },
  apis: [path.join(__dirname, "index.js")],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const swaggerUiOptions = {
  customSiteTitle: "API Gerenciador de Tarefas",
  customCss: `
    .swagger-ui .topbar {
      display: none;
    }

    .swagger-ui .info {
      margin: 30px 0;
    }

    .swagger-ui .scheme-container {
      border-radius: 10px;
      padding: 10px;
    }

    body {
      background: #f4f7fb;
    }
  `,
  customfavIcon: "https://cdn-icons-png.flaticon.com/512/2166/2166823.png",
};

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerUiOptions)
);

// Middleware de log
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

let tarefas = [];

/**
 * @swagger
 * /tarefas:
 *   get:
 *     tags:
 *       - Tarefas
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
 *     tags:
 *       - Tarefas
 *     summary: Cria uma nova tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: Estudar Express
 *               descricao:
 *                 type: string
 *                 example: Aprender rotas e middleware
 *     responses:
 *       201:
 *         description: Tarefa criada
 */
app.post("/tarefas", (req, res) => {
  const { titulo, descricao } = req.body;

  const tarefa = {
    id: crypto.randomUUID(),
    titulo,
    descricao,
    concluida: false,
  };

  tarefas.push(tarefa);

  res.status(201).json(tarefa);
});

/**
 * @swagger
 * /tarefas/{id}:
 *   put:
 *     tags:
 *       - Tarefas
 *     summary: Atualiza uma tarefa existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
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
 *     tags:
 *       - Tarefas
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

/**
 * @swagger
 * /tarefas/{id}:
 *   delete:
 *     tags:
 *       - Tarefas
 *     summary: Remove uma tarefa
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarefa removida
 */
app.delete("/tarefas/:id", (req, res) => {
  const { id } = req.params;

  tarefas = tarefas.filter((t) => t.id !== id);

  res.json({
    mensagem: "Tarefa removida",
  });
});

module.exports = app;
