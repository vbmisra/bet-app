const mongoose = require('mongoose');
// const betSchema = require('./BetItem');
const Nominee = require('./Nominee').schema;

const { Schema } = mongoose;

const categorySchema = new Schema({
  title: {
    type: String,
  },
  nominees: [{
    type: Schema.Types.String,
    ref: 'Nominee'
  }]
  // nominees: [Nominee]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
