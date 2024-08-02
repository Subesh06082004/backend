const Order = require('../model/orderModel');
//


const post_order = async (req, res) => {
    try {
        if (!req.body.user_id) {
            return res.status(400).json({ msg: 'User information is missing' });
        }

        const newOrder = new Order({
            user_id: req.body.user_id,
            user_email: req.body.user_email,
            products: req.body.products,
            total_amount: req.body.total_amount,
            order_status: req.body.order_status || 'pending',
            cust_name: req.body.cust_name,
            cust_phno: req.body.cust_phno,
            cust_address: req.body.cust_address,
            OrderDate: req.body.OrderDate, 
            Est_Delv_Date: req.body.Est_Delv_Date
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const get_all_orders = async (req, res) => {
    try {
        if (!req.body.user_id) {
            return res.status(400).json({ msg: 'User information is missing' });
        }
else{
        const orders = await Order.find({});
        res.json(orders);

}
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = { post_order, get_all_orders };
