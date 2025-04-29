const config = {
  jwt: {
    secret: process.env.JWT_SECRET || 'your_jwt_secret_key',
    expiresIn: '30d',
  },
  db: {
    url: process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce',
  },
  env: process.env.NODE_ENV || 'development',
};

module.exports = config;
