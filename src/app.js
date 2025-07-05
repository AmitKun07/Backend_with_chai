import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    // methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "10mb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);
app.use(express.static("public"));
app.use(cookieParser());

export {app};