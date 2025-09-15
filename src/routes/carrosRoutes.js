import express from "express";
import { createCarro, deleteCarro, getAllcarros, getCarrosByid, updateCarros } from "../controllers/carrosControllers.js"

const router = express.Router();

router.get("/", getAllcarros);
router.get("/:id", getCarrosByid);
router.delete("/:id", deleteCarro);
router.post("/", createCarro);
router.put("/:id", updateCarros)
export default router