const express = require("express")
const cors = require("cors");

const databaseConnection = require("./database");
const bookRouter  = require ("./routes/book.routes");


const app = express();
app.use(express.json());
app.use(cors())

databaseConnection();

app.get("/" , (req , res )=>{
    res.send("hello home page")
})
app.use("/book" ,  bookRouter)


app.listen(8000 , ()=>{
    console.log("Port is running on 8000")
})