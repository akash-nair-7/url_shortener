const pool = require("../config/db");
const generateCode = require("../utils/generateCode");

async function createShortUrl(longUrl) {
  const code = generateCode();

  const query = `
    INSERT INTO urls (code, long_url)
    VALUES ($1, $2)
    RETURNING code
  `;
  await pool.query(query, [code, longUrl]);

  return code;
}

async function getLongUrl(code) {
  const query = `SELECT long_url FROM urls WHERE code = $1`;
  const result = await pool.query(query, [code]);
  return result.rows[0]?.long_url || null;
}

module.exports = { createShortUrl, getLongUrl };
