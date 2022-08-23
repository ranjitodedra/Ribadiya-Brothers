const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
dotenv.config({path:"config/config.env"});

process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promises");
    
    process.exit(1);
})

connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is listening ${process.env.PORT}`);
});

process.on("unhandledRejection", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promises");

    server.close(()=>{
        process.exit(1);
    });
});

