import { getData } from '../_utils';

export default function handler(req, res) {
  const { id } = req.query;
  const data = await getData('hp_character', id);
  return res.status(data.status).json(data);
}
