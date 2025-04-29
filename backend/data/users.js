const bcrypt = require('bcryptjs');

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
    address: {
      street: '123 Admin St',
      city: 'Admin City',
      state: 'Admin State',
      postalCode: '12345',
      country: 'USA',
    },
    phone: '123-456-7890',
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
    address: {
      street: '456 User St',
      city: 'User City',
      state: 'User State',
      postalCode: '54321',
      country: 'USA',
    },
    phone: '987-654-3210',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
    address: {
      street: '789 Customer St',
      city: 'Customer City',
      state: 'Customer State',
      postalCode: '67890',
      country: 'USA',
    },
    phone: '456-789-0123',
  },
];

module.exports = users;
