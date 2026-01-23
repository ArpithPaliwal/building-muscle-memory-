import app from "./app.js";
import connectDB from "./db/index.js"

const startServer = async():Promise<any>=>{
    try {
        connectDB()
        app.listen(5000,()=>{
            console.log("hi");
            
        })
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}