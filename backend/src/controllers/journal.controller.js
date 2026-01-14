import JournalEntry from "../models/JournalEntry.model.js";

/**
 * CREATE journal entry
 * POST /journal
 */
export const createEntry = async (req, res) => {
  try {
    const { content } = req.body;
    // NOTE:
    // Validation (content required, length, etc.)
    // should be handled by express-validator middleware.
    // This controller assumes clean input.

    const entry = await JournalEntry.create({
      userId: req.user.id,
      content,
    });

    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ message: "Failed to create journal entry" });
  }
}
/**
 * GET all journal entries (user-specific)
 * GET /journal
 */

export const getAllEntries = async (req, res) => {
  try {
    const entries = await JournalEntry.find({ userId: req.user.id })
      .sort({ createdAt: -1 });

    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch journal entries" });
  }
}
/**
 * GET single journal entry
 * GET /journal/:id
 */

export const getSingleEntry = async (req, res) => {
  try {
    const entry = await JournalEntry.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!entry)
      return res.status(404).json({ message: "Entry not found" });

    res.status(200).json(entry);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch journal entry" });
  }
}
/**
 * UPDATE journal entry
 * PATCH /journal/:id
 */

export const updatedEntry = async (req, res) => {
  try {
    const { content } = req.body;

    const updatedEntry = await JournalEntry.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.id, // 🔒 ownership check
      },
      {
        content,
      },
      {
        new: true,          // return updated document
        runValidators: true,
      }
    );

    if (!updatedEntry)
      return res.status(404).json({ message: "Entry not found" });

    res.status(200).json(updatedEntry);
  } catch (err) {
    res.status(500).json({ message: "Failed to update journal entry" });
  }
}
/**
 * DELETE journal entry
 * DELETE /journal/:id
 */

export const deleteEntry = async (req, res) => {
  try {
    const deleted = await JournalEntry.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!deleted)
      return res.status(404).json({ message: "Entry not found" });

    res.status(200).json({ message: "Entry deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete journal entry" });
  }
}