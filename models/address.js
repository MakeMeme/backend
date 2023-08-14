const {mongoose,model,Schema} = require("mongoose");

const addressSchema = new Schema({
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  });
  
const Address = model('Address', addressSchema);

module.exports = Address;
