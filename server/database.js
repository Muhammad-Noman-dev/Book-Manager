const mongoose = require("mongoose")
const databaseConnection = ()=>{
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");
        console.log("Host:", mongoose.connection.host);
        console.log("Database Name:", mongoose.connection.name);
    })
    .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1);
    });
}

module.exports =  databaseConnection;