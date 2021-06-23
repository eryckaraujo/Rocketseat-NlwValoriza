// Imports necessários ao projeto
import "reflect-metadata"
import express from "express";
import "./database";

// Inicializando o servidor da aplicação
const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

app.get("/test", (request, response) => {
    // Request => Entrando
    // Response => Saindo
    return response.send("Olá NLW");
  });
  

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW método POST");
  });

// Determinando a porta do servidor 
app.listen(3000, () => console.log("Server Running SHOW"));
