require('dotenv').config();

const env = {
    databaseURL: process.env.DATABASE_URL,
    port: process.env.PORT || 3000,
    secretKey: process.env.SECRET_KEY,
    // Add more environment specific configurations here
};

module.exports = env;
