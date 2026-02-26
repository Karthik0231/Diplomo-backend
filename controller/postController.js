import post from "../models/postSchema.js";

export const createPost = async(req,res) => {
    try {
        const { caption, image, userId } = req.body;
        const addData = await post.create({
            caption: caption,
            image: image,
            user: userId
        })
        res.status(201).json({
            success:true,
            message:'Data added successfully!',
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:'Error adding data!',
        })
    }
}