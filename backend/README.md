# E-commerce Platform Backend

This is the backend for the e-commerce platform built with Node.js, Express.js, and MongoDB.

## Features

- User authentication and authorization (JWT)
- Product management (CRUD operations)
- Cart management
- Order processing
- Admin panel functionality

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product
- `POST /api/products` - Create a new product (Admin only)
- `PUT /api/products/:id` - Update a product (Admin only)
- `DELETE /api/products/:id` - Delete a product (Admin only)
- `POST /api/products/:id/reviews` - Create a product review
- `GET /api/products/top` - Get top rated products

### Users
- `POST /api/users` - Register a new user
- `POST /api/users/login` - Authenticate user & get token
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users` - Get all users (Admin only)
- `DELETE /api/users/:id` - Delete a user (Admin only)
- `GET /api/users/:id` - Get a user by ID (Admin only)
- `PUT /api/users/:id` - Update a user (Admin only)

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id/pay` - Update order to paid
- `GET /api/orders/myorders` - Get logged in user orders
- `GET /api/orders` - Get all orders (Admin only)
- `PUT /api/orders/:id/deliver` - Update order to delivered (Admin only)
- `PUT /api/orders/:id/status` - Update order status (Admin only)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:productId` - Update cart item quantity
- `DELETE /api/cart/:productId` - Remove item from cart
- `DELETE /api/cart` - Clear cart

## Setup Instructions

1. **Install dependencies**
   ```
   npm install
   ```

2. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

3. **Run the server**
   ```
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## Database Setup

1. **Install MongoDB** if you haven't already
2. **Start MongoDB** service
3. The application will automatically create the required collections

## Integration with Frontend

The frontend should be configured to make API requests to the backend endpoints. The proxy is already set up in the frontend's package.json to forward requests to the backend during development.

## Deployment

For production deployment:
1. Set NODE_ENV to 'production' in .env file
2. Use a production MongoDB instance
3. Set a strong JWT_SECRET
4. Consider using a process manager like PM2
