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

const tagSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true // Ensures that tag names are unique
    }
  });


  
  
  
  // Sample usage in another schema (e.g., for a post)
  
  module.exports = Post;