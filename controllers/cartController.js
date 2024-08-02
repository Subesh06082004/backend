const Cart = require('../model/cartModel');

// Add product to cart
exports.addProductToCart = async (req, res) => {
    try {
        const { user_id, product_id, quantity } = req.body;

        let cart = await Cart.findOne({ user_id });

        if (!cart) {
            cart = new Cart({ user_id, products: [{ product_id, quantity }] });
        } else {
            const productIndex = cart.products.findIndex(p => p.product_id === product_id);

            if (productIndex > -1) {
                cart.products[productIndex].quantity = quantity;
            } else {
                cart.products.push({ product_id, quantity });
            }
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Remove product from cart
exports.removeProductFromCart = async (req, res) => {
    try {
        const { user_id, product_id } = req.body;

        let cart = await Cart.findOne({ user_id });

        if (!cart) {
            return res.status(404).json({ msg: 'Cart not found' });
        }

        cart.products = cart.products.filter(p => p.product_id !== product_id);

        if (cart.products.length === 0) {
            await Cart.deleteOne({ user_id });
            return res.status(200).json({ msg: 'Cart deleted' });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get cart details
exports.getCart = async (req, res) => {
    try {
        const { user_id } = req.params;

        const cart = await Cart.findOne({ user_id });

        if (!cart) {
            return res.status(404).json({ msg: 'Cart not found' });
        }

        res.status(200).json(cart);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};