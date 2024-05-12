
import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;

}

const connection: ConnectionObject = {};

async function dbConnect():Promise<void> {
    if (connection.isConnected) {
        console.log("Using existing connection");
        return;
    }
    try {
    const db =      await mongoose.connect(process.env.MONGO_URI || '');
    connection.isConnected = db.connections[0].readyState;
    console.log("DB connected");
    } catch (error) {
        console.log(error);
        console.log("Error connecting to database");
        process.exit(1);
    }

    
} 
export default dbConnect;