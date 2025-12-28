import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

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

export { app };
