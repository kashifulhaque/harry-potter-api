import { getData } from './_utils.js';

export default async function handler(req, res) {
  const data = await getData('wand');
  res.status(data.status).json(data);
}
