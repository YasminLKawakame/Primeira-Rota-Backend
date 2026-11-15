import { Produto } from "../model/Produto.js";

import {
    cadastrarProduto as salvarProduto,
    listarProduto as listar,
    buscarProdutoPorIndice,
    atualizarProduto as atualizar,
    excluirProduto as excluir
} from "../repository/produtoRepository.js";

export function cadastrarProduto(nome, preco, quantidade) {
    const produto = new Produto(nome, preco, quantidade);

    salvarProduto(produto);

    console.log("Produto cadastrado com sucesso.");
}

export function listarProdutos() {
    const lista = listar();

    console.log("\n======== Lista de Produtos ========");

    for (let i = 0; i < lista.length; i++) {
        console.log("Índice:", i);
        console.log("Nome:", lista[i].nome);
        console.log("Preço:", lista[i].preco);
        console.log("Quantidade:", lista[i].quantidade);
        console.log("----------------------");
    }
}

export function buscarProdutoPorID(indice) {
    const produto = buscarProdutoPorIndice(indice);

    if (produto === undefined) {
        console.log("Produto não encontrado.");
        return;
    }

    console.log("Produto encontrado:");
    console.log("Nome:", produto.nome);
    console.log("Preço:", produto.preco);
    console.log("Quantidade:", produto.quantidade);
}


export function atualizarProduto(indice, nome, preco, quantidade) {
    const produtoEncontrado = buscarProdutoPorIndice(indice);

    if (produtoEncontrado === undefined) {
        console.log("Produto não encontrado.");
        return;
    }

    const produto = new Produto(nome, preco, quantidade);

    atualizar(indice, produto);

    console.log("Produto atualizado com sucesso.");
}

export function excluirProduto(indice) {
    const produto = buscarProdutoPorIndice(indice);

    if (produto === undefined) {
        console.log("Produto não encontrado.");
        return;
    }

    excluir(indice);

    console.log("Produto excluído com sucesso.");
}