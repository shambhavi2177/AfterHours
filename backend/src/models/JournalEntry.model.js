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
