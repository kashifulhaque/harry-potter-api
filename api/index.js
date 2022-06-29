import express from "express";
import dotenv from "dotenv";

import { getData } from './utils.js';

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Harry Potter API",
    endpoints: ['/characters', '/characters/:id', '/wands', '/wands/:id']
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

module.exports = app;

// Video URL: https://www.youtube.com/watch?v=GyicOpBFUbw