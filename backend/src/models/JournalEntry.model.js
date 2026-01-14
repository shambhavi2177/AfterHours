import mongoose from "mongoose";

const journalEntrySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // important for fast user-based queries
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const JournalEntry = mongoose.model("JournalEntry", journalEntrySchema);

export default JournalEntry;

/**{
    "userId": "6967b56d0a98cd8054ce84d5",
    "content": "sdfhsjdhfjsdhfjhs",
    "_id": "6967b6cd06e3b5f0278797d3",
    "createdAt": "2026-01-14T15:31:25.030Z",
    "updatedAt": "2026-01-14T15:31:25.030Z",
    "__v": 0
} */