const mongoose = require('mongoose');
// const betSchema = require('./BetItem');

const { Schema } = mongoose;

const nomineeSchema = new Schema({
  nominee1: {
    type: String,
    required: true
  },
  nominee2: {
    type: String
  },
  nominee3: {
    type: String
  },
  nominee4: {
    type: String
  },
  nominee5: {
    type: String
  },
  nominee6: {
    type: String
  },
  nominee7: {
    type: String
  },
  nominee8: {
    type: String
  },
  nominee9: {
    type: String
  },
  nominee10: {
    type: String
  }
});



const categorySchema = new Schema({
  title: {
    type: String,
    
  },
  nominees: [nomineeSchema]
  // bets: [ betSchema ]
});

const Category = mongoose.model('Category', categorySchema);
const Nominee = mongoose.model('Nominee', nomineeSchema);

module.exports = Category, Nominee;
