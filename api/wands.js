import { getData } from './_utils';

export default function handler(req, res) {
  const data = await getData('wand');
  res.status(data.status).json(data);
}
