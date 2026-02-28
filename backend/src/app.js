import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js"
import journalRoutes from "./routes/journal.routes.js";


const app = express();

// app.use(cors(
//     {
//      origin: "http://localhost:5000"
//     }
// ));
app.use(cors({
  origin: "http://localhost:5173", // frontend later
  credentials: true,
})); 
//It said not to allow without credentials -> cookies

app.use(express.json());
app.use(cookieParser())

app.use("/health", healthRoutes);
app.use("/api/auth",authRoutes); 
app.use("/api/journal", journalRoutes);

export default app;
