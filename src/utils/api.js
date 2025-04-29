import axios from 'axios';

// Create axios instance with base URL
const API = axios.create({ baseURL: '/api' });

// Add token to request headers if available
API.interceptors.request.use((req) => {
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    const token = JSON.parse(userInfo).token;
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Product API calls
export const fetchProducts = () => API.get('/products');
export const fetchProductDetails = (id) => API.get(`/products/${id}`);
export const createProduct = (productData) => API.post('/products', productData);
export const updateProduct = (id, productData) => API.put(`/products/${id}`, productData);
export const deleteProduct = (id) => API.delete(`/products/${id}`);
export const createProductReview = (id, reviewData) => API.post(`/products/${id}/reviews`, reviewData);
export const getTopProducts = () => API.get('/products/top');

// User API calls
export const loginUser = (credentials) => API.post('/users/login', credentials);
export const registerUser = (userData) => API.post('/users', userData);
export const getUserProfile = () => API.get('/users/profile');
export const updateUserProfile = (userData) => API.put('/users/profile', userData);
export const getUsers = () => API.get('/users');
export const deleteUser = (id) => API.delete(`/users/${id}`);
export const getUserById = (id) => API.get(`/users/${id}`);
export const updateUser = (id, userData) => API.put(`/users/${id}`, userData);

// Order API calls
export const createOrder = (orderData) => API.post('/orders', orderData);
export const getOrderDetails = (id) => API.get(`/orders/${id}`);
export const payOrder = (id, paymentResult) => API.put(`/orders/${id}/pay`, paymentResult);
export const getMyOrders = () => API.get('/orders/myorders');
export const getOrders = () => API.get('/orders');
export const deliverOrder = (id) => API.put(`/orders/${id}/deliver`);
export const updateOrderStatus = (id, status) => API.put(`/orders/${id}/status`, { status });

// Cart API calls
export const getCart = () => API.get('/cart');
export const addToCart = (productId, quantity) => API.post('/cart', { productId, quantity });
export const updateCartItem = (productId, quantity) => API.put(`/cart/${productId}`, { quantity });
export const removeFromCart = (productId) => API.delete(`/cart/${productId}`);
export const clearCart = () => API.delete('/cart');
