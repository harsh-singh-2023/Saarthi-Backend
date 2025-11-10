// 📄 server.js (or index.js)

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import hotelRoutes from "./routes/hotelRoutes.js";
import itineraryRoutes from "./routes/itineraryRoutes.js";
import placesRoutes from "./routes/placesRoutes.js"; // ✅ Your places route

dotenv.config({ path: "./.env.local" });

const app = express();

// ✅ Use CORS
app.use(cors()); // This allows requests from your frontend
app.use(express.json());

// ✅ Mount routes
app.use("/api/hotels", hotelRoutes);
app.use("/api/itinerary", itineraryRoutes);
app.use("/api/places", placesRoutes); // 👈 This line is correct

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
