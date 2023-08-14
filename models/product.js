const {mongoose,model,Schema} = require("mongoose");

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    images: [String],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    // Add more fields as needed
  });
  
  const Product = model('Product', productSchema);


  module.exports = Product;
