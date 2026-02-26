import mongoose from "mongoose";
const mongo_url = 'mongodb://localhost:27017/john'

const mongoConnection = async() =>{
    try {
        await mongoose.connect(mongo_url)
        console.log("database connected successfully")
    } catch (error) {
        console.log("error in conneting database")
    }
}

export default mongoConnection;