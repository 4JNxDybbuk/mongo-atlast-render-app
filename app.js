const express = require('express')
require('dotenv').config()
const connectDB = require('./db');
const app = express();
const PORT = process.env.PORT;

connectDB(process.env.MONGODB_URL);

const adminModel = require('./admin.model')
app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1> Server is running </h1>")
})


app.get('/users', async (req, res) => {
    try {
        const users = await adminModel.find({})
        // console.log("data:", users);
        return res.json({
            message: "Fetching users..",
            data: users
        })
    } catch (error) {
        console.log("ER:", error)
    }
})

app.listen(PORT, () => console.log("Server listen on port :", PORT))

