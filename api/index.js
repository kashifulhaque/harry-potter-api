export default async function handler(req, res) {
  res.status(200).json({
    message: "Harry Potter API",
    endpoints: ['/api/characters', '/api/characters/:id', '/api/wands', '/api/wands/:id']
  });
}
