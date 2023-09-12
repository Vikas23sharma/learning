const express = require('express')
const cors=require("cors")
const { connection } = require('./db')
const { userRouter } = require('./routes/userRoutes')
const { logger } = require('./middleware/logger')

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger)
app.use("/users",userRouter)




app.listen(3000, async () => {
    try {
        await connection
        console.log("connected to the database successfully")
    } catch (error) {
        console.log(error)
        console.log("error while connecting to the database")
    }
    console.log("server is running at port 3000")
})