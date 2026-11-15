import express from "express";
import { cadastrarCategoria, 
    listarCategorias,
    buscarCategoriaPorID,
    atualizarCategoria,
    excluirCategoria 
} from "../controller/categoriaController.js"; 

const router = express.Router();

router.post("/", cadastrarCategoria);
router.get("/", listarCategorias);
router.get("/:id", buscarCategoriaPorID);
router.patch("/:id", atualizarCategoria);
router.delete("/:id", excluirCategoria);

export default router;
