import { Categoria } from "../model/Categoria.js";

import {
    cadastrarCategoria as salvarCategoria,
    listarCategorias as listar,
    buscarCategoriaPorIndice,
    atualizarCategoria as atualizar,
    excluirCategoria as excluir
} from "../repository/categoriaRepository.js";

export function cadastrarCategoria(req, res) {
    const categoria = new Categoria(req.body.nome, req.body.descricao);

    salvarCategoria(categoria);

    return res.status(201).json({ mensagem: "Categoria cadastrada com sucesso." });
}

export function listarCategorias(req, res) {
    const lista = listar();

    console.log("\n======== Lista de Categorias ========");

    for (let i = 0; i < lista.length; i++) {
        console.log("Índice:", i);
        console.log("Nome:", lista[i].nome);
        console.log("Descrição:", lista[i].descricao);
        console.log("----------------------");
    }

    return res.status(200).json(lista);
}

export function buscarCategoriaPorID(req, res) {
    const indice = Number(req.params.id);
    const categoria = buscarCategoriaPorIndice(indice);

    if (categoria === undefined) {
        return res.status(404).json({ mensagem: "Categoria não encontrada." });
    }

    return res.status(200).json(categoria);
}

export function atualizarCategoria(req, res) {
    const indice = Number(req.params.id);
    const categoriaEncontrada = buscarCategoriaPorIndice(indice);

    if (categoriaEncontrada === undefined) {
        return res.status(404).json({ mensagem: "Categoria não encontrada." });
    }

    const { nome, descricao } = req.body;

    if (nome !== undefined) {
        categoriaEncontrada.nome = nome;
    }
    if (descricao !== undefined) {
        categoriaEncontrada.descricao = descricao;
    }
    atualizar(indice, categoriaEncontrada);

    return res.status(200).json({ mensagem: "Categoria atualizada com sucesso." });
}

export function excluirCategoria(req, res) {
    const indice = Number(req.params.id);
    const categoria = buscarCategoriaPorIndice(indice);

    if (categoria === undefined) {
        return res.status(404).json({ mensagem: "Categoria não encontrada." });
    }

    excluir(indice);

    return res.status(204).send();
}