import express from "express";
import { cadastrarProduto, 
    listarProdutos,
    buscarProdutoPorID,
    atualizarProduto,
    excluirProduto 
} from "../controller/produtoController.js"; 

const router = express.Router();

router.post("/", cadastrarProduto);
router.get("/", listarProdutos);
router.get("/:id", buscarProdutoPorID);
router.patch("/:id", atualizarProduto);
router.delete("/:id", excluirProduto);

export default router;
