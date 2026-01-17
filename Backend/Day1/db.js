import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://arpithpaliwal_db_user:MEeo8o0s3THazqMN@cluster0.mp1edqu.mongodb.net/dailyPractise")
        console.log("DB CONNECTED AT ",connectionInstance.connection.host);
        
    } catch (error) {
        console.log("db connection failed ");
        throw new error("failed to connect ",error)
        
    }
}