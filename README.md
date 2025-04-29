# ShopEasy - Full Stack E-commerce Platform

A complete e-commerce solution with a React frontend and Node.js backend.

## Features

- **Dynamic Product Catalog**: Browse, search, and filter products with detailed pages
- **User Authentication**: Secure registration and login system
- **Shopping Cart**: Add, update, and remove items from your cart
- **Checkout Process**: Smooth, multi-step checkout with address and payment information
- **Order Management**: Place orders and track order history
- **Admin Dashboard**: Manage products, users, and orders with full CRUD operations
- **Responsive Design**: Fully responsive UI that works on all devices

## Tech Stack

### Frontend
- React.js with functional components and hooks
- Redux Toolkit for state management
- React Router for navigation
- Formik & Yup for form validation
- Tailwind CSS for styling
- Axios for API requests
- React Toastify for notifications

### Backend
- Node.js & Express.js for the server
- MongoDB for the database
- Mongoose for object modeling
- JWT for authentication
- bcrypt.js for password hashing
- Express Async Handler for error handling

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd my-ecommerce-platform
   ```

2. **Install frontend dependencies**
   ```
   npm install
   ```

3. **Install backend dependencies**
   ```
   cd backend
   npm install
   cd ..
   ```

4. **Set up environment variables**
   Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

5. **Seed the database with sample data**
   ```
   cd backend
   npm run data:import
   cd ..
   ```

### Running the Application

**Development mode (Frontend & Backend concurrently)**
```
npm run dev
```

**Frontend only**
```
npm start
```

**Backend only**
```
npm run server
```

## API Endpoints

The backend provides a comprehensive set of RESTful API endpoints:

- **Products**: CRUD operations, reviews, filtering
- **Users**: Authentication, profile management
- **Cart**: Add, update, remove items
- **Orders**: Create, update, view orders

For detailed API documentation, see the [backend README](./backend/README.md).

## Deployment

The application can be deployed to various platforms:

- Frontend: Vercel, Netlify, or GitHub Pages
- Backend: Heroku, AWS, or DigitalOcean
- Database: MongoDB Atlas

## License

This project is licensed under the MIT License.
