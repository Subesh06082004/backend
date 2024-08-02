const express = require('express');
const router = express.Router();
const { addProductToCart, removeProductFromCart, getCart } = require('../controllers/cartController');

// Add product to cart
router.post('/add', addProductToCart);

// Remove product from cart
router.delete('/remove', removeProductFromCart);

// Get cart details
router.get('/:user_id', getCart);

module.exports = router;