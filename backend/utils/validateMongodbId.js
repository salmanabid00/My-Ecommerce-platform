const mongoose = require('mongoose');

// Validate MongoDB ID
const validateMongodbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) {
    throw new Error('Invalid MongoDB ID');
  }
};

module.exports = validateMongodbId;
