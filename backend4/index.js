const express = require("express")
const { connection } = require("./db")
const { userRouter } = require("./Routes/userRoutes")
const { Logger } = require("./Middleware/Logger")
const { adminRouter } = require("./Routes/adminroutes")

const app = express()
app.use(Logger)
app.use(express.json())
app.use("/users", userRouter)
app.use("/admin", adminRouter)


app.listen(5000, async () => {
    try {
        await connection
        console.log("Connected to the database successfully!")
    } catch (error) {
        console.log("Error while connecting to the database!")

        console.log(error)
    }
    console.log(
        "App is running at port 5000"
    )
})