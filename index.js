import express from 'express'
import mongoConnection from './db.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import postRoutes from './routes/postRoutes.js'

const app = express()
app.use(express.json())  //middleware to parse json data
mongoConnection()

app.use(cors())

const PORT = 7000

//test api(optional)
app.get("/diplomo",(req, res)=>{
    res.send("Hi iam backend!")
})

app.use("/users",userRoutes)
app.use("/auth",authRoutes)
app.use('/post',postRoutes)

app.listen(PORT, ()=>{
    console.log("Hi !Iam running on "+PORT)
})

