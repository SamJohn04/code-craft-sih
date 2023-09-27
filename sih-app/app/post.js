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


const postSchema = new mongoose.Schema({
    // Other fields related to your post
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId, // Assuming you have a User schema
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    // You can add other fields like tags, images, or any other relevant data.
    tags: [String], // An array of tags associated with the post
    images: [String], // An array of image URLs associated with the post
  });