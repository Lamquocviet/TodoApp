
import mongoose from "mongoose"

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING)
        console.log("Liên kết thành công Database")
    } catch (error) {
        console.error("Lỗi kết nối database", error);
        process.exit(1);
    }
}