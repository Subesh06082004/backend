const express = require('express');
const router = express.Router();
const { post_order, get_all_orders} = require('../controllers/orderController');

router.post('/orders',post_order);
router.get('/orders',get_all_orders);

module.exports = router;