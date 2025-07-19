const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.get("/", async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.post("/", async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.json(book);
});

router.get("/current", async (req, res) => {
    const current = await Book.findOne({ isCurrent: true });
    res.json(current);
});

module.exports = router;
