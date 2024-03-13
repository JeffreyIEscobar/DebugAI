const env = require('./env');

// You might have separate configuration files or objects for different environments
// For example: const development = require('./development');
// const production = require('./production');

// Select the configuration based on the NODE_ENV environment variable
// or default to 'development' if it's not set.
const environment = process.env.NODE_ENV || 'development';

let config;

switch (environment) {
    case 'development':
        config = env; // Assuming the same env.js for simplicity
        break;
    case 'production':
        config = env; // Replace with your production settings if different
        break;
    // Add more cases as needed for other environments like 'testing', 'staging', etc.
    default:
        config = env;
        break;
}

module.exports = config;
