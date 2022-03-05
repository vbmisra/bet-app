const { AuthenticationError } = require('apollo-server-express');
// TODO: update models based on file names
const { User, Nominee, Category } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    // query user
    user: async(parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({_id: context.user._id}).select('-__v -password')

        // user.choices.sort((a, b) => b.money - a.money)

        // user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate)
        return user
      }
      throw new AuthenticationError('not logged in')
    },

    users: async (parent, args, context) => {
      return await User.find({})
    },

    // query friends
    friends: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({_id: context.user._id})
        const friends = user.Friends
        return friends
      }

      throw new AuthenticationError('no user logged in')
    },
    // query user balance
    userBalance: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({_id: context.user._id})
        const balance = user.accountBalance
        return balance
      }

      throw new AuthenticationError('no user logged in')
    },
    // best picture
    picture: async () => {
      return await Category.findOne({ title: 'Best Picture' }).exec()
      // const category = await Category.findOne({ title: 'Best Picture' }).exec()
      // category.populate({
      //   path: 'category.nominees',
      //   populate: 'nominee'
      // })
      // return category
    },
    // best director
    director: async () => {
      return await Category.findOne({ title: 'Best Director' }).exec()
    },
    // best actor
    actor: async () => {
      return await Category.findOne({ title: 'Best Actor' }).exec()
    },
    // best actress
    actress: async () => {
      return await Category.findOne({ title: 'Best Actress' }).exec()
    },
    // best supporting actor
    supportingactor: async () => {
      return await Category.findOne({ title: 'Best Supporting Actor' }).exec()
    },
    // best supporting actress
    supportingactress: async () => {
      return await Category.findOne({ title: 'Best Supporting Actress' }).exec()
    },
    // best animated feature film
    animatedfeaturefilm: async () => {
      return await Category.findOne({ title: 'Best Animated Feature Film' }).exec()
    },
    // best animated short film
    animatedshortfilm: async () => {
      return await Category.findOne({ title: 'Best Animated Short Film' }).exec()
    },
    // best cinematography
    cinematography: async () => {
      return await Category.findOne({ title: 'Best Cinematography' }).exec()
    },
    // best costume design
    costumedesign: async () => {
      return await Category.findOne({ title: 'Best Costume Design' }).exec()
    },
    // best documentary feature
    documentaryfeature: async () => {
      return await Category.findOne({ title: 'Best Documentary Feature' }).exec()
    },
    // best documentary short subject
    documentaryshortsubject: async () => {
      return await Category.findOne({ title: 'Best Documentary Short Subject' }).exec()
    },
    // best film editing
    filmediting: async () => {
      return await Category.findOne({ title: 'Best Film Editing' }).exec()
    },
    // best international feature film
    internationalfeaturefilm: async () => {
      return await Category.findOne({ title: 'Best International Feature Film' }).exec()
    },
    // best live action short film
    liveactionshortfilm: async () => {
      return await Category.findOne({ title: 'Best Live Action Short Film' }).exec()
    },
    // best makeup and hairstyling
    makeup: async () => {
      return await Category.findOne({ title: 'Best Makeup And Hairstyling' }).exec()
    },
    // best original score
    originalscore: async () => {
      return await Category.findOne({ title: 'Best Original Score' }).exec()
    },
    // best original song
    originalsong: async () => {
      return await Category.findOne({ title: 'Best Original Song' }).exec()
    },
    // best production design
    productiondesign: async () => {
      return await Category.findOne({ title: 'Best Production Design' }).exec()
    },
    // best sound editing
    sound: async () => {
      return await Category.findOne({ title: 'Best Sound' }).exec()
    },
    // best visual effects
    visualeffects: async () => {
      return await Category.findOne({ title: 'Best Visual Effects' }).exec()
    },
    // best adapted screenplay
    adaptedscreenplay: async () => {
      return await Category.findOne({ title: 'Best Adapted Screenplay' }).exec()
    },
    // best original screenplay
    originalscreenplay: async () => {
      return await Category.findOne({ title: 'Best Original Screenplay' }).exec()
    },
    // *** may need to revisit addFunds ***
    addFunds: async (parent, args, context) => {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${url}/success?session_id={USER_SESSION_ID}`,
        cancel_url: `${url}/`
      })

      return { session: session.id }
    }
  },
  Mutation: {
    // add user
    addUser: async (parent, args) => {
      const user = await User.create(args)
      const token = signToken(user) 

      return { token, user }
    },
    // login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw new AuthenticationError('Incorrect Login Credentials')
      }

      const correctPass = await user.isCorrectPassword(password)

      if (!correctPass) {
        throw new AuthenticationError('Incorrect Login Credentials')
      }

      const token = signToken(user)

      return { token, user }
    },
    // add category
    addCategory: async (parent, args) => {
      const category = await Category.create(args)
      return category
    },
    // add nominee **** un-comment the category reference in Nominee model ****
    // ** nice to have **
    addNominee: async (parent, args, context) => {
      const nominee = await Nominee.create(args)
      await Category.findOneAndUpdate(context.category._id, { $push: { nominees: nominee } })
      return nominee
    },
    // **** TODO: bet money on nominee
    betMoney: async (parent, { bet }, context) => {
      // update user bets
      if (context.user) {
        // const user = await User.findOne({_id: context.user._id})
        // const currentBalance = user.accountBalance
        // const newBalance = currentBalance - bet
        // return User.findByIdAndUpdate(context.user._id, { $push: { accountBalance: newBalance } })
        
        const nominee = await Nominee.findOne({_id: context.user.Choices._id})
        const nomineeBalance = nominee.money
        const newNomBalance = nomineeBalance + bet
      //  await User.findOneAndUpdate(context.user._id, { $set: { accountBalance: newBalance } }) ;
       await Nominee.findOneAndUpdate(context.nominee._id, { $set: { money: newNomBalance } });

       return {newNomBalance}
        
      }

      throw new AuthenticationError('No user logged in')
    },
    // **** TODO: add friend
    addFriend: async (parent, args, context) => {
      const friend = await User.findOne({_id: args._id})
      if (context.user) {
        return await User.findOneAndUpdate(context.user._id, { $push: { Friends: friend } }) 
      }

      throw new AuthenticationError('no user found')
    },

    pickNominee: async (parent, args, context) => {
      const nominee = await Nominee.findOne({_id: args._id})
      if (context.user) {
        return await User.findOneAndUpdate(context.user._id, { $push: { Choices: nominee } }) 
      }

      throw new AuthenticationError('no user found')
    },
    // add balance
    addToBalance: async (parent, { amount }, context) => {
      // add money to user balance
      if (context.user) {
        const user = await User.findOne({_id: context.user._id})
        const currentBalance= user.accountBalance
        const newBalance = currentBalance + amount
        return await User.findOneAndUpdate(context.user._id, { $set: { accountBalance: newBalance } })
      }

      throw new AuthenticationError('No user logged in')
    },
    // reduce balance
    reduceBalance: async (parent, { amount }, context) => {
      // add money to user balance
      if (context.user) {
        const user = await User.findOne({_id: context.user._id})
        const currentBalance = user.accountBalance
        const newBalance = currentBalance - amount
        return await User.findOneAndUpdate(context.user._id, { $set: { accountBalance: newBalance } })
      }

      throw new AuthenticationError('No user logged in')
    },
    // withdraw money
    withdrawBalance: async (parent, { amount }, context) => {
      // add money to user balance
      if (context.user) {
        //const currentBalance = await User.findById(context.user._id).accountBalance
        const newBalance = 0
        return await User.findOneAndUpdate(context.user._id, { $set: { accountBalance: newBalance } })
      }

      throw new AuthenticationError('No user logged in')
    },
    // edit category
    updateCategory: async(parent, args, context) => {
      if (context.category) {
        return Category.findOneAndUpdate(context.category._id, { $push: args })
      }

      throw new AuthenticationError('category no category selected')
    },
    // remove user
    // ** nice to have **
    deleteUser: async(parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({_id: context.user._id})
      }

      throw new AuthenticationError('no existing user selected')
    }
  }
}

// const resolvers = {
//   Query: {
//     // find categories
//     categories: async () => {
//       return await Category.find();
//     },
//     //find bets on a category
//     products: async (parent, { category, name }) => {
//       const params = {};

//       if (category) {
//         params.category = category;
//       }

//       if (name) {
//         params.name = {
//           $regex: name
//         };
//       }

//       return await Nominee.find(params).populate('category');
//     },
//     // find specific bet by user
//     product: async (parent, { _id }) => {
//       return await Nominee.findById(_id).populate('category');
//     },
//     user: async (parent, args, context) => {
//       if (context.user) {
//         const user = await User.findById(context.user._id).populate({
//           path: 'orders.products',
//           populate: 'category'
//         });

//         user.friends.sort((a, b) => b.username - a.username);

//         return user;
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     order: async (parent, { _id }, context) => {
//       if (context.user) {
//         const user = await User.findById(context.user._id).populate({
//           path: 'orders.products',
//           populate: 'category'
//         });

//         return user.orders.id(_id);
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     checkout: async (parent, args, context) => {
//       const url = new URL(context.headers.referer).origin;
//       const order = new Order({ products: args.products });
//       const line_items = [];

//       const { products } = await order.populate('products').execPopulate();

//       for (let i = 0; i < products.length; i++) {
//         const product = await stripe.products.create({
//           name: products[i].name,
//           description: products[i].description,
//           images: [`${url}/images/${products[i].image}`]
//         });

//         const price = await stripe.prices.create({
//           product: product.id,
//           unit_amount: products[i].price * 100,
//           currency: 'usd',
//         });

//         line_items.push({
//           price: price.id,
//           quantity: 1
//         });
//       }

//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items,
//         mode: 'payment',
//         success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
//         cancel_url: `${url}/`
//       });

//       return { session: session.id };
//     }
//   },
//   Mutation: {
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
//       const token = signToken(user);

//       return { token, user };
//     },
//     addOrder: async (parent, { products }, context) => {
//       console.log(context);
//       if (context.user) {
//         const order = new Order({ products });

//         await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

//         return order;
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     updateUser: async (parent, args, context) => {
//       if (context.user) {
//         return await User.findByIdAndUpdate(context.user._id, args, { new: true });
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     updateProduct: async (parent, { _id, quantity }) => {
//       const decrement = Math.abs(quantity) * -1;

//       return await Nominee.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const token = signToken(user);

//       return { token, user };
//     }
//   }
// };

module.exports = resolvers;
