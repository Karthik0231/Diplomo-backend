import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User",userSchema)
export default User;

//steps
//1. import mongoose
//2. create a variable and assign new mongoose.Schema({object})
//3. inside object create all the keys and for those keys assign one object consist of blueprint of data.
//4. create one variable and assign mongoose.model("collectionName", schemaVariable)
//5. export that variable