const { createShortUrl, getLongUrl } = require("../services/urlService");

async function shortenUrl(req, res) {
  const { url } = req.body;
  if (!url) return res.status(400).json({ message: "URL is required" });

  const code = await createShortUrl(url);
  const shortUrl = `http://localhost:${process.env.PORT}/api/${code}`;
  res.json({ shortUrl });
}

async function redirectUrl(req, res) {
  const code = req.params.code;
  const longUrl = await getLongUrl(code);

  if (!longUrl) {
    return res.status(404).json({ message: "URL not found" });
  }

  res.redirect(longUrl);
}

module.exports = { shortenUrl, redirectUrl };

