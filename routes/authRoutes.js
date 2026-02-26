import express from "express"
import { registerUser, userLogin } from "../controller/authController.js";

const router = express.Router()

//routes
router.post("/register", registerUser)
router.post("/login", userLogin)

export default router;