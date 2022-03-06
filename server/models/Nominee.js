const mongoose = require('mongoose');
// const betSchema = require('./BetItem');

const { Schema } = mongoose;

const nomineeSchema = new Schema({
    nominee: {
      type: String,
      required: true
    },
    money: {
      type: Number, 
    },
    category: {
      type: String
    }
  });

const Nominee = mongoose.model('Nominee', nomineeSchema);

module.exports = Nominee;