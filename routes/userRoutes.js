import express from 'express'
import { createUser, getUser, singleView, deleteUser, updateUser } from '../controller/userController.js';

//create router
const router = express.Router()

//routes
//route structure -> variable.httpMethod("path", handler)
router.post("/addUser", createUser)
router.get("/getUser", getUser)
router.get("/singleView/:diplomo", singleView)
router.delete("/delete/:id", deleteUser)
router.put("/update/:id", updateUser)

//export
export default router;