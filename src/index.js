import express from "express";
import person from "./api/personRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", person);

export default app;
