const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
  name: String,
  title: String,
  author: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Suggestion', suggestionSchema);
