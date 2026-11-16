# API - Gerenciamento de Produtos, Categorias e Fornecedores

## Sobre o projeto

Este projeto consiste no desenvolvimento de uma API REST utilizando **Node.js e Express**, com o objetivo de realizar o gerenciamento de três recursos: **Produto, Categoria e Fornecedor**.

Ao executar o projeto, a API disponibiliza todos os recursos no mesmo servidor, permitindo realizar operações de cadastro, listagem, consulta, atualização e exclusão de registros.

Os dados são armazenados temporariamente em **Arrays**, sem utilização de banco de dados nesta etapa do desenvolvimento.

## Funcionalidades

A API disponibiliza as seguintes operações para cada recurso:

- **Cadastrar:** adicionar novos registros.
- **Listar:** consultar todos os registros cadastrados.
- **Buscar:** consultar um registro específico.
- **Atualizar:** modificar os dados de um registro.
- **Excluir:** remover um registro.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Express
- Postman

## Como executar o projeto

1. Clone este repositório:

   ```bash
   git clone (https://github.com/YasminLKawakame/Primeira-Rota-Backend.git)
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd Primeira-Rota-Backend
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

   Caso utilize o Nodemon:

   ```bash
   npm run dev
   ```

## Testes da API

Os testes das rotas e funcionalidades são realizados utilizando o **Postman**, por meio das requisições HTTP:

| Método HTTP | Operação |
|---|---|
| GET | Listar e consultar registros |
| POST | Cadastrar registros |
| PUT | Atualizar registros |
| DELETE | Excluir registros |

## Armazenamento dos dados

Nesta versão, as informações são armazenadas em Arrays durante a execução da aplicação.

**Importante:** como não existe integração com banco de dados, os registros cadastrados são perdidos quando o servidor é reiniciado.

## Objetivo

Desenvolver e praticar a criação de APIs REST, utilizando Node.js e Express, trabalhando com múltiplos recursos, organização de rotas e operações CRUD.
