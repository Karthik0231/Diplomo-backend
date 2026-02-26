import express from 'express';
import { createPost } from '../controller/postController.js';

const router =  express.Router();

//routes
router.post("/create", createPost)

export default router;