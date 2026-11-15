const produtos = [];

export function cadastrarProduto(produto) {
    produtos.push(produto);
}

export function listarProduto() {
    return produtos;
}

export function buscarProdutoPorIndice(indice) {
    return produtos[indice];
}

export function atualizarProduto(indice, produto) {
    produtos[indice] = produto;
}

export function excluirProduto(indice) {
    produtos.splice(indice, 1);
}