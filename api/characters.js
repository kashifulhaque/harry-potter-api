import { getData } from './_utils';

export default function handler(req, res) {
  const data = await getData('hp_character');
  res.status(data.status).json(data);
}