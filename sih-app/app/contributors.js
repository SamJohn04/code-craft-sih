const mongoose = require('mongoose');

const contributorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profileLink: String,
  contributions: String,
});

const Contributor = mongoose.model('Contributor', contributorSchema);

module.exports = Contributor;
