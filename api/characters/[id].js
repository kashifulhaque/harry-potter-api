const { getData } = require('../_utils.js');

export default async function handler(req, res) {
  const { id } = req.query;
  const data = await getData('hp_character', id);
  
  return res.status(data.status).json(data);
}
