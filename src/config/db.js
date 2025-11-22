const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  password: process.env.DB_PASSWORD,
  host: "aws-1-ap-southeast-1.pooler.supabase.com",
  database: "postgres",
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;
