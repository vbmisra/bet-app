const db = require('./connection');
const { User, Category, Nominee } = require('../models');

db.once('open', async () => {
  // await Nominee.deleteMany();

  // const nomineees = await Nominee.insertMany([
  //   {nominee: "meryl streep", nominee: "aaaaa"},
  //   {nominee: "meryl streep", nominee: "aaaaa"}
  // ]);  

  // console.log('nominees seeded');

  await Category.deleteMany();

  const categories = await Category.insertMany([
    {title: "Best Picture", nominees: [{nominee1: "Belfast", nominee2: "Coda", nominee3: "Don't Look Up", nominee4: "Drive My Car", nominee5: "Dune", nominee6: "King Richard", nominee7: "Licorice Pizza", nominee8: "Nightmare Alley", nominee9: "The Power of the Dog", nominee10: "West Side Story"}]},
    {title: "Best Actress", nominees: [{nominee1: "meryl streep", nominee2: "bbbbb"}]}
  ]);

  console.log('categories seeded');

  // await Product.deleteMany();

  // const products = await Product.insertMany([
  //   {
  //     name: 'Tin of Cookies',
  //     description:
  //       'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  //     image: 'cookie-tin.jpg',
  //     category: categories[0]._id,
  //     price: 2.99,
  //     quantity: 500
  //   }
  // ]);

  // console.log('products seeded');

  await User.deleteMany();

  await User.create({
    username: 'test',
    email: 'test@test.com',
    password: '123456',
    accountBalance: 100
  });

  // await User.create({
  //   firstName: 'Elijah',
  //   lastName: 'Holt',
  //   email: 'eholt@testmail.com',
  //   password: 'password12345'
  // });

  console.log('users seeded');

  process.exit();
});
