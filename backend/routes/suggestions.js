const express = require("express");
const router = express.Router();
const Suggestion = require("../models/Suggestion");

// Get all suggestions
router.get("/", async (req, res) => {
  try {
    const suggestions = await Suggestion.find().sort({ createdAt: -1 });
    res.json(suggestions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch suggestions' });
  }
});

// Get latest suggestion
router.get("/suggested", async (req, res) => {
  try {
    const latestSuggestion = await Suggestion.findOne().sort({ createdAt: -1 });
    if (!latestSuggestion) {
      return res.status(404).json({ message: 'No suggestions found' });
    }
    res.json(latestSuggestion);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch latest suggestion' });
  }
});

router.delete('/clear', async (req, res) => {
  try {
    await Suggestion.deleteMany({});
    res.json({ message: 'All suggestions cleared' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear suggestions' });
  }
});


// Post new suggestion
router.post("/", async (req, res) => {
  try {
    const suggestion = new Suggestion(req.body);
    await suggestion.save();
    res.json(suggestion);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save suggestion' });
  }
});

module.exports = router;
