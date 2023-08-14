const {mongoose,model,Schema} = require("mongoose");

const orderSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
      },
    ],
    shippingAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
    totalAmount: Number,
    orderDate: Date,
    status: String, // Order status (e.g., processing, shipped, delivered, etc.)
    // Add more fields as needed
  });

  const Order = model('Order', orderSchema);


  module.exports = Order;
