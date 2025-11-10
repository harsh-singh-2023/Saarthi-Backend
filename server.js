// 📄 server.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import hotelRoutes from "./routes/hotelRoutes.js";
import itineraryRoutes from "./routes/itineraryRoutes.js";
import placesRoutes from "./routes/placesRoutes.js";

dotenv.config({ path: "./.env.local" });

const app = express();

// --- START: Recommended CORS Fix ---

// 1. Define the options and whitelist your Vercel frontend
const corsOptions = {
  origin: "https://saarthi-coral.vercel.app",
  optionsSuccessStatus: 200, // For legacy browser support
};

// 2. Use the options in app.use()
app.use(cors(corsOptions));

// --- END: Recommended CORS Fix ---

// We're replacing this line: app.use(cors());

app.use(express.json());

// Mount routes
app.use("/api/hotels", hotelRoutes);
app.use("/api/itinerary", itineraryRoutes);
app.use("/api/places", placesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
