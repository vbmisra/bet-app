const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
// const categorySchema = require('./Category');

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  accountBalance: {
    type: Number
  },
  Choices: [{
    type: Schema.Types.ObjectId,
    ref: 'Nominee',
  }],
  Friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  },
  {
    toJSON: {
      virtuals: true, 
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  })

const User = mongoose.model('User', userSchema);

module.exports = User;
