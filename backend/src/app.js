import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js"
const app = express();

app.use(cors(
    {
     origin: "http://localhost:5000"
    }
));
/*app.use(cors({
  origin: "http://localhost:5173", // frontend later
  credentials: true,
})); It said not to allow with credentials */

app.use(express.json());
app.use(cookieParser())

app.use("/health", healthRoutes);
app.use("/auth",authRoutes); 

export default app;
