import { Router } from "express";
import { authLimiter } from "../middleware/rateLimiter.js";
import { register, logout, login } from "../controllers/auth.controller.js";
import {
  registerValidator,
  loginValidator,
} from "../validators/auth.validator.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.get("/me", authMiddleware, (req, res) => {
  res.status(200).json({
    user: req.user,
  });
});

/* REGISTER */
router.post("/register", authLimiter, registerValidator, register);

/* LOGIN */
router.post("/login", authLimiter, loginValidator, login);

/* LOGOUT */
router.post("/logout", logout);

export default router;
