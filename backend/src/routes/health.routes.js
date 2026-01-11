import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    console.log("App is running within the health routes:")
  res.status(200).json({ status: "OK", message: "Smart Journal API running" });
});

export default router;
