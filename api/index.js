const express = require("express");
const crypto = require("crypto");
const path = require("path");

const app = express();

app.use(express.json());

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Logs das requisições
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Página de documentação
app.get("/docs", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "docs.html"));
});

// Redireciona raiz para documentação
app.get("/", (req, res) => {
  res.redirect("/docs");
});

// Banco fake em memória
let tarefas = [];

// LISTAR TAREFAS
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

// CRIAR TAREFA
app.post("/tarefas", (req, res) => {
  const { titulo, descricao } = req.body;

  // Validações
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

// ATUALIZAR TAREFA
app.put("/tarefas/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, descricao } = req.body;

  const tarefa = tarefas.find((t) => t.id === id);

  if (!tarefa) {
    return res.status(404).json({
      erro: "Tarefa não encontrada",
    });
  }

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

  tarefa.titulo = titulo;
  tarefa.descricao = descricao;

  res.json(tarefa);
});

// CONCLUIR TAREFA
app.patch("/tarefas/:id/concluir", (req, res) => {
  const { id } = req.params;

  const tarefa = tarefas.find((t) => t.id === id);

  if (!tarefa) {
    return res.status(404).json({
      erro: "Tarefa não encontrada",
    });
  }

  tarefa.concluida = true;

  res.json({
    mensagem: "Tarefa concluída com sucesso",
    tarefa,
  });
});

// REMOVER TAREFA
app.delete("/tarefas/:id", (req, res) => {
  const { id } = req.params;

  const tarefaExiste = tarefas.some((t) => t.id === id);

  if (!tarefaExiste) {
    return res.status(404).json({
      erro: "Tarefa não encontrada",
    });
  }

  tarefas = tarefas.filter((t) => t.id !== id);

  res.json({
    mensagem: "Tarefa removida com sucesso",
  });
});

// Inicialização local
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Documentação em http://localhost:${PORT}/docs`);
});

module.exports = app;
