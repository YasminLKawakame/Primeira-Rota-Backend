import express from "express";
import { cadastrarFornecedor, 
    listarFornecedores,
    buscarFornecedorPorID,
    atualizarFornecedor,
    excluirFornecedor 
} from "../controller/fornecedorController.js"; 

const router = express.Router();

router.post("/", cadastrarFornecedor);
router.get("/", listarFornecedores);
router.get("/:id", buscarFornecedorPorID);
router.patch("/:id", atualizarFornecedor);
router.delete("/:id", excluirFornecedor);

export default router;
