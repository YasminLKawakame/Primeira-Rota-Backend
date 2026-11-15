const categorias = [];

export function cadastrarCategoria(categoria) {
    categorias.push(categoria);
}

export function listarCategorias() {
    return categorias;
}

export function buscarCategoriaPorIndice(indice) {
    return categorias[indice];
}

export function atualizarCategoria(indice, categoria) {
    categorias[indice] = categoria;
}

export function excluirCategoria(indice) {
    categorias.splice(indice, 1);
}