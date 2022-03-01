const db = require('./connection');
const { User, Category, Nominee } = require('../models');

db.once('open', async () => {
  
  await User.deleteMany();
  await Nominee.deleteMany();
  await Category.deleteMany();
  
  const nominees = await Nominee.collection.insertMany([
    {nominee: "meryl streep", money: 100},
    {nominee: "Belfast",  money: 100}
  ]);  

  console.log('nominees seeded');
  // console.log(nominees)
 
  const categories = await Category.collection.insertOne(
    {title: "Best Picture", nominees: [nominees.ops[0].nominee,nominees.ops[1].nominee]}
    // {title: "Best Picture",nominees:bestPicture}
  );

  console.log('categories seeded');

  await User.create({
    username: 'test',
    email: 'test@test.com',
    password: '123456',
    accountBalance: 100,
    choices: [nominees.ops[0].nominee,nominees.ops[1].nominee]
  });

  console.log('users seeded');

  process.exit();
});
