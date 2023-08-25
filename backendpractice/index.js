const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./routes/userRoute")

const app = express()

app.use(express.json())

app.use("/users", userRouter)

app.listen(4000, async () => {
    try {
        await connection
        console.log("connected to database successfully")
    } catch (error) {
        console.log(error)
        console.log("error while connecting to the database")
    }
    console.log("server is running at port 4000")
})