import app from "./app.js";
import connectDB from "./db/index.js";

const startServer = async():Promise<void>=>{
    try {
        await connectDB()
        app.listen(5000,()=>{
            console.log("server started listening at port 5000");
            
        })
    } catch (error) {
        console.error('Server startup failed', error);
        process.exit(1);
    }
}

startServer();