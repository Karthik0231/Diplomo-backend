import User from "../models/userSchema.js";

//structure of logic 
// export const functionName = async(req,res)=>{
    // try {
    // access data from frontend( only for create and update)
    // access id from url (singleView, delete, update) -> req.params.routeValue
    // validation
    // execute mongoDb function "await Schema.mongoFunction(data)"
    // send response to frontend
    // } catch (error) {
        // send error in response
    // }
// }

export const createUser = async(req, res)=>{
    try {
        const {useremail, username, userphone}= req.body;
        const addUser = await User.create({
            name: username,
            email: useremail,
            phone: userphone
        });
        res.status(200).json({
            success: true,
            message:"Data added Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:"Error in adding data"
        })
    }
}

export const getUser = async(req,res) =>{
    try {
        const userData = await User.find();
        res.status(200).json({
            success:true,
            message:"Data fetched successfully!",
            data: userData
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error in fetching data!",
        })
    }
}

export const singleView = async(req,res) => {
    try {
        const id = req.params.diplomo;
        const userData = await User.findById(id)
        res.status(200).json({
            success:true,
            message:"I got the User Data!",
            data: userData
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Error in fetching data!",
        })
    }
}

//delete
export const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id;
        const deleteData = await User.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:"Data deleted!",
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error in fetching data!",
        })
    }
}

export const updateUser = async(req,res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updateData = await User.findByIdAndUpdate(id,data,{new:true})
        res.status(200).json({
            success:true,
            message:"Data updated successfully!",
            data: updateData
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Error in fetching data!",
        })
    }
}