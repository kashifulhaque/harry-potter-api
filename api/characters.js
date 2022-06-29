const { getData } = require('./_utils');

export default async function handler(req, res) {
  const data = await getData('hp_character');
  res.status(data.status).json(data);
}
