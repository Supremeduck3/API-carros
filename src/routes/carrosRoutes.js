import express from "express";
import { getAllcarros, getCarrosByid } from "../controllers/carrosControllers.js"

const router = express.Router();

router.get("/", getAllcarros);
router.get("/id", getCarrosByid);

export default router