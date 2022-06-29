const { getData } = require('../_utils');

export default async function handler(req, res) {
  const { id } = req.query;
  const data = await getData('wand', id);
  return res.status(data.status).json(data);
}
