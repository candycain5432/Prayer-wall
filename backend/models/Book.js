const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    isCurrent: { type: Boolean, default: false }
});

module.exports = mongoose.model("Book", bookSchema);
