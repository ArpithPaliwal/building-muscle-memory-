import app from "./app.js";
import connectDB from "./db/index.js";


function startServer(){
    connectDB()
    app.listen(5000,()=>{
        console.log("listening ")
        
})
}

startServer();
