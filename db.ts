import mongoose from "mongoose";

const connect = async () => {
  const mongoUrl = process.env.MONGODB_URI;

  if (!mongoUrl) {
    throw new Error("MongoDB URI not found");
  }

  // Check if we've already connected
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to MongoDB database");
    return;
  }

  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB database");
  } catch (error){
    console.error("Error in connecting to MongoDB database", error);
    throw error;
  }
}

export default connect;
