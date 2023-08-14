const {mongoose,model,Schema} = require("mongoose");

const cartSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
      },
    ],
  });

const Cart = model('Cart', cartSchema);

module.exports = Cart;
