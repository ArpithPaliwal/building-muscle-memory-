import mongoose from "mongoose"


const connectDB = async():Promise<any>=>{
    try {
        const connectionInstance = await mongoose.connect("")
    console.log(`${connectionInstance.connection.host}`);
    
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}

export default connectDB