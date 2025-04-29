const asyncHandler = require('express-async-handler');
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');
const validateMongodbId = require('../utils/validateMongodbId');

// @desc    Get user cart
// @route   GET /api/cart
// @access  Private
const getCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate({
    path: 'cartItems.product',
    select: 'title price image countInStock',
  });

  if (cart) {
    res.json(cart);
  } else {
    // If no cart exists, create an empty one
    const newCart = await Cart.create({
      user: req.user._id,
      cartItems: [],
    });
    res.json(newCart);
  }
});

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  
  validateMongodbId(productId);

  // Check if product exists
  const product = await Product.findById(productId);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  // Check if quantity is valid
  if (quantity <= 0) {
    res.status(400);
    throw new Error('Quantity must be greater than 0');
  }

  // Check if product is in stock
  if (product.countInStock < quantity) {
    res.status(400);
    throw new Error('Product is out of stock');
  }

  // Find user's cart
  let cart = await Cart.findOne({ user: req.user._id });

  // If cart doesn't exist, create one
  if (!cart) {
    cart = await Cart.create({
      user: req.user._id,
      cartItems: [{ product: productId, quantity }],
    });
  } else {
    // Check if product already exists in cart
    const existingItemIndex = cart.cartItems.findIndex(
      (item) => item.product.toString() === productId
    );

    if (existingItemIndex !== -1) {
      // Update quantity if product already exists
      cart.cartItems[existingItemIndex].quantity += quantity;
    } else {
      // Add new product to cart
      cart.cartItems.push({ product: productId, quantity });
    }

    await cart.save();
  }

  // Return updated cart with populated product details
  const updatedCart = await Cart.findOne({ user: req.user._id }).populate({
    path: 'cartItems.product',
    select: 'title price image countInStock',
  });

  res.status(201).json(updatedCart);
});

// @desc    Update cart item quantity
// @route   PUT /api/cart/:productId
// @access  Private
const updateCartItem = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;
  
  validateMongodbId(productId);

  // Check if quantity is valid
  if (quantity <= 0) {
    res.status(400);
    throw new Error('Quantity must be greater than 0');
  }

  // Find user's cart
  const cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }

  // Find the item in the cart
  const cartItemIndex = cart.cartItems.findIndex(
    (item) => item.product.toString() === productId
  );

  if (cartItemIndex === -1) {
    res.status(404);
    throw new Error('Item not found in cart');
  }

  // Check if product is in stock
  const product = await Product.findById(productId);
  if (product.countInStock < quantity) {
    res.status(400);
    throw new Error('Product is out of stock');
  }

  // Update quantity
  cart.cartItems[cartItemIndex].quantity = quantity;
  await cart.save();

  // Return updated cart with populated product details
  const updatedCart = await Cart.findOne({ user: req.user._id }).populate({
    path: 'cartItems.product',
    select: 'title price image countInStock',
  });

  res.json(updatedCart);
});

// @desc    Remove item from cart
// @route   DELETE /api/cart/:productId
// @access  Private
const removeFromCart = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  
  validateMongodbId(productId);

  // Find user's cart
  const cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }

  // Remove the item from the cart
  cart.cartItems = cart.cartItems.filter(
    (item) => item.product.toString() !== productId
  );

  await cart.save();

  // Return updated cart with populated product details
  const updatedCart = await Cart.findOne({ user: req.user._id }).populate({
    path: 'cartItems.product',
    select: 'title price image countInStock',
  });

  res.json(updatedCart);
});

// @desc    Clear cart
// @route   DELETE /api/cart
// @access  Private
const clearCart = asyncHandler(async (req, res) => {
  // Find user's cart
  const cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }

  // Clear cart items
  cart.cartItems = [];
  await cart.save();

  res.json({ message: 'Cart cleared' });
});

module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
};
