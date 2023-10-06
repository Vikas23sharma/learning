const express = require('express')
const { userRouter } = require('./Routes/userRoutes')
const { connection } = require('./db')
const { loggermiddleware } = require('./Middleware/logger')
const { postRouter } = require('./Routes/postRoutes')
const { likeroute } = require('./Routes/likeroutes')
const { commentroute } = require('./Routes/commentroutes')

const app = express()

app.use(express.json())
app.use(loggermiddleware)
app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/likes", likeroute)
app.use("/comments", commentroute)

app.listen(4000, async () => {
    try {
        await connection
        console.log("Connected to the database successfully")
    } catch (error) {
        console.log("Error while connecting to the database")
        console.log(error)
    }
    console.log("server is running at port 4000")
})