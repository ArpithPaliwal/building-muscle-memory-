import mongoose from "mongoose";

 const  connectDB = async():Promise<void>=>{
    try {
        const instance = await mongoose.connect("mongodb+srv://arpithpaliwal_db_user:MEeo8o0s3THazqMN@cluster0.mp1edqu.mongodb.net/dailyPractise")
        console.log(`DB Connected to ${instance.connection.host}`);
        
    } catch (error) {
        console.log("Error : failed to connect db ",error);
        process.exit(1);
        
    }
}

export default connectDB