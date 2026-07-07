const express = require("express");
const cors = require("cors");
require("dotenv").config();

const databaseConnection = require("./database");
const bookRouter = require("./routes/book.routes");

const app = express();

app.use(express.json());

app.use(cors({
  origin: [
    "https://book-manager-u73i.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

databaseConnection();

app.get("/", (req, res) => {
  res.send("hello home page");
});

app.use("/book", bookRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Port is running on ${process.env.PORT || 8000}`);
});