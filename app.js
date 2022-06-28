import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = 3001;
const app = express();

app.get('/', (req, res) => {
  res.json({
    'message': 'Hello World'
  })
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
