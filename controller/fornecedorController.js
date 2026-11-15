import { Fornecedor } from "../model/Fornecedor.js";

import {
    cadastrarFornecedor as salvarFornecedor,
    listarFornecedores as listar,
    buscarFornecedorPorIndice,
    atualizarFornecedor as atualizar,
    excluirFornecedor as excluir
} from "../repository/fornecedorRepository.js";

export function cadastrarFornecedor(req, res) {
    const fornecedor = new Fornecedor(req.body.nome, req.body.cnpj, req.body.telefone);

    salvarFornecedor(fornecedor);

    console.log("Fornecedor cadastrado com sucesso.");
    return res.status(201).json({ mensagem: "Fornecedor cadastrado com sucesso." });
}

export function listarFornecedores(req, res) {
    const lista = listar();

    console.log("\n======== Lista de Fornecedores ========");

    for (let i = 0; i < lista.length; i++) {
        console.log("Índice:", i);
        console.log("Nome:", lista[i].nome);
        console.log("CNPJ:", lista[i].cnpj);
        console.log("Telefone:", lista[i].telefone);
        console.log("---------------------------");
    }

    return res.status(200).json(lista);
}


export function buscarFornecedorPorID(req, res) {
    const indice = Number(req.params.id);
    const fornecedor = buscarFornecedorPorIndice(indice);

    if (fornecedor === undefined) {
        return res.status(404).json({ mensagem: "Fornecedor não encontrado." });
    }

    return res.status(200).json(fornecedor);
}


export function atualizarFornecedor(req, res) {
    const indice = Number(req.params.id);
    const fornecedorEncontrado = buscarFornecedorPorIndice(indice);

    if (fornecedorEncontrado === undefined) {
        return res.status(404).json({ mensagem: "Fornecedor não encontrado." });
    }

    const { nome, cnpj, telefone } = req.body;

    if (nome !== undefined) {
        fornecedorEncontrado.nome = nome;
    }
    if (cnpj !== undefined) {
        fornecedorEncontrado.cnpj = cnpj;
    }
    if (telefone !== undefined) {
        fornecedorEncontrado.telefone = telefone;
    }

    atualizar(indice, fornecedorEncontrado);

    return res.status(200).json({ mensagem: "Fornecedor atualizado com sucesso." });
}

export function excluirFornecedor(req, res) {
    const indice = Number(req.params.id);
    const fornecedor = buscarFornecedorPorIndice(indice);

    if (fornecedor === undefined) {
        return res.status(404).json({ mensagem: "Fornecedor não encontrado." });
    }

    excluir(indice);
    
    console.log("Fornecedor excluído com sucesso.");

    return res.status(204).send();
}