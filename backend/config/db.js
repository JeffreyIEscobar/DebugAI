const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || 'your_default_local_mongodb_uri';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbURI, options)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
