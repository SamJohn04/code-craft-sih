const mongoose = require('mongoose');

// Schema for University
const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensures university names are unique
  },
  location: {
    type: String,
    required: true,
  },
  foundedYear: {
    type: Number,
    required: true,
  },
  accreditationStatus: {
    type: String,
    enum: ['Accredited', 'Not Accredited'], // You can define other accreditation statuses as needed
    required: true,
  },
  githubLink: {
    type: String,
    required: false, // Assuming a GitHub link is optional
  },
});

const University = mongoose.model('University', universitySchema);

module.exports = University;