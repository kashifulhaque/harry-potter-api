export default async function handler(req, res) {
  res.status(200).json({
    message: "Harry Potter API",
    endpoints: ['/characters', '/characters/:id', '/wands', '/wands/:id']
  });
}
