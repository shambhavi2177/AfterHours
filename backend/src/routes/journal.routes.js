import { Router } from "express";
import JournalEntry from "../models/JournalEntry.model.js";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  createEntry,
  deleteEntry,
  getAllEntries,
  getSingleEntry,
  updatedEntry,
} from "../controllers/journal.controller.js";

const router = Router();
router.use(authMiddleware);

router.post("/", createEntry);

router.get("/", getAllEntries);

router.get("/:id", getSingleEntry);

router.patch("/:id", updatedEntry);

router.delete("/:id", deleteEntry);

export default router;
