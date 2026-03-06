import express from 'express';
import { createPost } from '../controller/postController.js';
import authUser from '../middleware/authUser.js';
import upload from '../middleware/upload.js';

const router =  express.Router();

//routes
router.post("/create",authUser,upload.single("image"), createPost)

export default router;