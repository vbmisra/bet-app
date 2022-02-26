const mongoose = require('mongoose');
// const betSchema = require('./BetItem');

const { Schema } = mongoose;

const categorySchema = new Schema({
  title: {
    type: String,
  },
  nominees: [{
    type: Schema.Types.ObjectId,
    ref: 'Nominee'
  }]
  // bets: [ betSchema ]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
