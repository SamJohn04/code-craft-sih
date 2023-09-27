import mongoose from "mongoose";

async function connectToDatabase() {
    try {
      await mongoose.connect("mongodb://0.0.0.0:27017/practice");
      console.log("Connection successful");
    } catch (err) {
      console.error(err);
    }
  }
  
  connectToDatabase();