import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

const port = 3001;
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Harry Potter API",
  });
});

app.get("/characters", async (req, res) => {
  let status = 200;
  let returnValue = {};

  try {
    const query = "select * from hp_character";
    const [rows] = await connection.query(query);
    returnValue.data = rows;

    res.status(status).json(returnValue);
  } catch (err) {
    console.error(err);
    status = 500;
    returnValue.message = "Something went wrong";

    res.status(status).json(returnValue);
  }
});

app.get("/characters/:id", async (req, res) => {
  let status = 200;
  let returnValue = {};

  try {
    const { id } = req.params;

    const query = `select * from hp_character where hp_character.id=?`;
    const [rows] = await connection.query(query, [id]);

    if (!rows[0]) {
      returnValue.message = `No character with the given ID of ${id}`;
      status = 404;

      return res.status(status).json(returnValue);
    }

    returnValue.data = rows[0];
    res.status(status).json(returnValue);
  } catch(err) {
    console.error(err);
    status = 500;
    returnValue.message = "Something went wrong";

    res.status(status).json(returnValue);
  }
});

app.get("/wands", async (req, res) => {
  let status = 200;
  let returnValue = {};

  try {
    const query = "select * from wand";
    const [rows] = await connection.query(query);
    returnValue.data = rows;

    res.status(status).json(returnValue);
  } catch (err) {
    console.error(err);
    status = 500;
    returnValue.message = "Something went wrong";

    res.status(status).json(returnValue);
  }
});

app.get("/wands/:id", async (req, res) => {
  let status = 200;
  let returnValue = {};

  try {
    const { id } = req.params;

    const query = `select * from wand where wand.id=?`;
    const [rows] = await connection.query(query, [id]);

    if (!rows[0]) {
      returnValue.message = `No character with the given ID of ${id}`;
      status = 404;

      return res.status(status).json(returnValue);
    }

    returnValue.data = rows[0];
    res.status(status).json(returnValue);
  } catch(err) {
    console.error(err);
    status = 500;
    returnValue.message = "Something went wrong";

    res.status(status).json(returnValue);
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
