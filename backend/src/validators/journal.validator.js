import { body, param } from "express-validator";
import { validateRequest } from "../middleware/validateRequest.js";
import mongoose from "mongoose";

export const createJournalValidator = [
  body("content")
    .trim()
    .notEmpty()
    .withMessage("Content required")
    .isLength({ min: 1, max: 5000 })
    .withMessage("Invalid content length"),

  validateRequest,
];

export const updateJournalValidator = [
  body("content")
    .optional()
    .trim()
    .isLength({ min: 1, max: 5000 })
    .withMessage("Invalid content length"),

  validateRequest,
];

export const journalIdValidator = [
  param("id").custom(value => mongoose.Types.ObjectId.isValid(value)),

  validateRequest,
];
