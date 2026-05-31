const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

let tarefas = [];

app.get("/", (req, res) => {
  res.json({
    mensagem: "API funcionando",
  });
});

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

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
    id: uuidv4(),
    titulo,
    descricao,
    concluida: false,
    criadaEm: new Date(),
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
});

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

module.exports = app;
