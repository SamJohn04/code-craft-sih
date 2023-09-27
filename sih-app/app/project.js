const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  contributors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  tags: [String],
  githubLink: String,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
