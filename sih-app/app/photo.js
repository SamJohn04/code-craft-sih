const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/practice");
    console.log("Connection successful");
  } catch (err) {
    console.error(err);
  }
}

connectToDatabase();


const photoSchema = new mongoose.Schema({
    title: String,
    description: String,
    uploader: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the user who uploaded it
      ref: 'User', // Assuming you have a User model
    },
    imageUrl: String, // URL or file path to the image
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  });