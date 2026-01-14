import { validationResult } from "express-validator";

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: "Invalid input",
      fields: errors.array().map(err => err.path),
    });
  }

  next();
};
