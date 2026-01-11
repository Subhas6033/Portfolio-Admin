import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import data from "./Routes/GetData.routes.js";
import authRoutes from "./Routes/Auth.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(
  express.json({
    limit: "100kb",
  })
);

app.use(
  urlencoded({
    limit: "100kb",
    extended: true,
  })
);

app.use(cookieParser());

// app.use("/api/data", data);
app.use("/api/auth", authRoutes);

export { app };
