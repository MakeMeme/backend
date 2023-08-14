const {mongoose,model,Schema} = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
  role: {
    type: String,
    required: true
  },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
}, {timestamps: true});

const User = model('user', userSchema);

module.exports = User;