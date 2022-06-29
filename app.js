import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

import { getData } from './util.js';

dotenv.config();

const port = 3001;
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Harry Potter API",
  });
});

app.get("/characters", async (req, res) => {
  const data = await getData('hp_character');
  return res.status(data.status).json(data);
});

app.get("/characters/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getData('hp_character', id);
  return res.status(data.status).json(data);
});

app.get("/wands", async (req, res) => {
  const data = await getData('wand');
  return res.status(data.status).json(data);
});

app.get("/wands/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getData('wand', id);
  return res.status(data.status).json(data);
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

// Video URL: https://www.youtube.com/watch?v=GyicOpBFUbw