import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import postRoutes from "../routes/postRoutes.js";
import dalleRoutes from "../routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Hello from Dall-E");
});

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

// Export Express app as the handler for Vercel
export default app;
