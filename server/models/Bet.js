const mongoose = require('mongoose');
// const Nominee = require('./Nominee').schema;

const { Schema } = mongoose;

const betSchema = new Schema({
  betDate: {
    type: Date,
    default: Date.now
  },
  money: {
      type: Number
  },
  nominees: {
      type: Schema.Types.ObjectId,
      ref: 'Nominee'
    },
  
});

const Bet = mongoose.model('Bet', betSchema);

module.exports = Bet;