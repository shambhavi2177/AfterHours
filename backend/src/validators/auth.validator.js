import { body } from "express-validator";
import { validateRequest } from "../middleware/validateRequest.js";

export const registerValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email required")
    .isEmail()
    .withMessage("Invalid email")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Password required")
    .isLength({ min: 8, max: 64 })
    .withMessage("Invalid password length"),

  validateRequest,
];

export const loginValidator = [
  body("email")
    .trim()
    .notEmpty()
    .isEmail()
    .normalizeEmail(),

  body("password")
    .notEmpty(),

  validateRequest,
];

