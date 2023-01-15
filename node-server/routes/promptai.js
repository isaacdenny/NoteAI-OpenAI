import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { autoComplete } from "../controllers/promptai.js"

const router = express.Router()

router.post("/autocomplete", autoComplete)

export default router