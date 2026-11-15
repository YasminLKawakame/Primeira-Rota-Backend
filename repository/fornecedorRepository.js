const fornecedores = [];

export function cadastrarFornecedor(fornecedor) {
    fornecedores.push(fornecedor);
    console.log(fornecedores);
}

export function listarFornecedores() {
    return fornecedores;
}

export function buscarFornecedorPorIndice(indice) {
    return fornecedores[indice];
}

export function atualizarFornecedor(indice, fornecedor) {
    fornecedores[indice] = fornecedor;
}

export function excluirFornecedor(indice) {
    fornecedores.splice(indice, 1);
}