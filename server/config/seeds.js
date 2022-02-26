const db = require('./connection');
const { User, Category, Nominee } = require('../models');

db.once('open', async () => {
  
  await Nominee.deleteMany();
  await Category.deleteMany();
  const nominees = await Nominee.collection.insertMany([
    {nominee: "meryl streep", money: 100},
    {nominee: "Belfast",  money: 100}
  ]);  

  console.log('nominees seeded');
  console.log(nominees)
// nominees: [{nominee1: "Belfast", nominee2: "Coda", nominee3: "Don't Look Up", nominee4: "Drive My Car", nominee5: "Dune", nominee6: "King Richard", nominee7: "Licorice Pizza", nominee8: "Nightmare Alley", nominee9: "The Power of the Dog", nominee10: "West Side Story"}]
 

  const categories = await Category.collection.insertOne(
    {title: "Best Picture", nominees: [...nominees.ops]}
    // {title: "Best Actress", nominees: [{nominee1: "meryl streep", nominee2: "bbbbb"}]}
  );
// , 
  console.log('categories seeded');

  await User.deleteMany();

  await User.create({
    username: 'test',
    email: 'test@test.com',
    password: '123456',
    accountBalance: 100
  });

  console.log('users seeded');

  process.exit();
});
