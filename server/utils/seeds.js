const db = require('../config/connection');
const { User, Category, Nominee } = require('../models');

db.once('open', async () => {
  
  await User.deleteMany();
  await Nominee.deleteMany();
  await Category.deleteMany();
  
  const nominees = await Nominee.collection.insertMany([
    {nominee: "Belfast",  money: 0},
    {nominee: "Coda",  money: 0},
    {nominee: "Don't Look Up",  money: 0},
    {nominee: "Drive My Car",  money: 0},
    {nominee: "Dune",  money: 0},
    {nominee: "King Richard",  money: 0},
    {nominee: "Licorice Pizza",  money: 0},
    {nominee: "Nightmare Alley",  money: 0},
    {nominee: "The Power of the Dog",  money: 0},
    {nominee: "West Side Story",  money: 0},
    {nominee: "Andrew Garfield, Tick Tick... Boom!",  money: 0},
    {nominee: "Benedict Cumberbatch, The Power of the Dog",  money: 0},
    {nominee: "Denzel Washington, The Tragedy of Macbeth",  money: 0},
    {nominee: "Javier Bardem, Being the Ricardos",  money: 0},
    {nominee: "Will Smith, King Richard",  money: 0},
    {nominee: "Jessica Chastain, The Eyes of Tammy Faye",  money: 0},
    {nominee: "Olivia Colman, The Lost Daughter",  money: 0},
    {nominee: "Penelope Cruz, Parallel Mothers",  money: 0},
    {nominee: "Nicole Kidman, Being the Ricardos",  money: 0},
    {nominee: "Kristen Stewart, Spencer",  money: 0},
    {nominee: "Ciaran Hinds, Belfast",  money: 0},
    {nominee: "Troy Kotsur, Coda",  money: 0},
    {nominee: "Jesse Plemons, The Power of the Dog",  money: 0},
    {nominee: "J.K. Simmons, Being the Ricardos",  money: 0},
    {nominee: "Kodi Smit-McPhee, The Power of the Dog",  money: 0},
    {nominee: "Jessie Buckley, The Lost Daughter",  money: 0},
    {nominee: "Ariana Debose, West Side Story",  money: 0},
    {nominee: "Judi Dench, Belfast",  money: 0},
    {nominee: "Kirsten Dunst, The Power of the Dog",  money: 0},
    {nominee: "Aunhanue Ellis, King Richard",  money: 0},
    {nominee: "Jane Campion, The Power of the Dog",  money: 0},
    {nominee: "Kenneth Branagh, Belfast",  money: 0},
    {nominee: "Paul Thomas Anderson, Licorice Pizza",  money: 0},
    {nominee: "Ryusuke Hamaguchi, Drive My Car",  money: 0},
    {nominee: "Steven Spielberg, West Side Story",  money: 0},
    {nominee: "Coda",  money: 0},
    {nominee: "Drive My Car",  money: 0},
    {nominee: "Dune",  money: 0},
    {nominee: "The Lost Daughter",  money: 0},
    {nominee: "The Power of the Dog",  money: 0},
    {nominee: "Belfast",  money: 0},
    {nominee: "Don't Look Up",  money: 0},
    {nominee: "King Richard",  money: 0},
    {nominee: "Licorice Pizza",  money: 0},
    {nominee: "The Worst Person in the World",  money: 0},
    {nominee: "Dune",  money: 0},
    {nominee: "Free Guy",  money: 0},
    {nominee: "No Time to Die",  money: 0},
    {nominee: "Shang-Chi and the Legend of the Ten Rings",  money: 0},
    {nominee: "Spider-Man: No Way Home",  money: 0},
    {nominee: "Nicholas Britell, Don't Look Up",  money: 0},
    {nominee: "Hans Zimmer, Dune",  money: 0},
    {nominee: "Germaine Franco, Encanto",  money: 0},
    {nominee: "Alberto Iglesias, Parallel Mothers",  money: 0},
    {nominee: "Jonny Greenwood, The Power of the Dog",  money: 0},
    {nominee: "Belfast",  money: 0},
    {nominee: "Dune",  money: 0},
    {nominee: "No Time to Die",  money: 0},
    {nominee: "The Power of the Dog",  money: 0},
    {nominee: "West Side Story",  money: 0},
    {nominee: "Be Alive, King Richard",  money: 0},
    {nominee: "Dos Oruguitas, Encanto",  money: 0},
    {nominee: "Down to Joy, Belfast",  money: 0},
    {nominee: "No Time to Die, No Time to Die",  money: 0},
    {nominee: "Somehow You Do, Four Good Days",  money: 0},
    {nominee: "Encanto",  money: 0},
    {nominee: "Flee",  money: 0},
    {nominee: "Luca",  money: 0},
    {nominee: "The Mitchells vs. The Machines",  money: 0},
    {nominee: "Raya and the Last Dragon",  money: 0},
  ]);  

  console.log('nominees seeded');
  // console.log(nominees)

  bestPicture = []
  const getBestPicture = () => {
    for (let i = 0; i < 10; i++) {
      bestPicture.push(nominees.ops[i].nominee)
    }  
  }
  getBestPicture()

  bestActor = []
  const getBestActor = () => {
    for (let i = 10; i < 15; i++) {
      bestActor.push(nominees.ops[i].nominee)
    }  
  }
  getBestActor()

  bestActress = []
  const getBestActress = () => {
    for (let i = 15; i < 20; i++) {
      bestActress.push(nominees.ops[i].nominee)
    }  
  }
  getBestActress()

  bestSupportingActor = []
  const getBestSupportingActor = () => {
    for (let i = 20; i < 25; i++) {
      bestSupportingActor.push(nominees.ops[i].nominee)
    }  
  }
  getBestSupportingActor()

  bestSupportingActress = []
  const getBestSupportingActress = () => {
    for (let i = 25; i < 30; i++) {
      bestSupportingActress.push(nominees.ops[i].nominee)
    }  
  }
  getBestSupportingActress()

  bestDirector = []
  const getBestDirector = () => {
    for (let i = 30; i < 35; i++) {
      bestDirector.push(nominees.ops[i].nominee)
    }  
  }
  getBestDirector()

  bestAdaptedScreenplay = []
  const getBestAdaptedScreenplay = () => {
    for (let i = 35; i < 40; i++) {
      bestAdaptedScreenplay.push(nominees.ops[i].nominee)
    }  
  }
  getBestAdaptedScreenplay()

  bestOriginalScreenplay = []
  const getBestOriginalScreenplay = () => {
    for (let i = 40; i < 45; i++) {
      bestOriginalScreenplay.push(nominees.ops[i].nominee)
    }  
  }
  getBestOriginalScreenplay()

  bestVisualEffects = []
  const getBestVisualEffects = () => {
    for (let i = 45; i < 50; i++) {
      bestVisualEffects.push(nominees.ops[i].nominee)
    }  
  }
  getBestVisualEffects()

  bestMusic = []
  const getBestMusic = () => {
    for (let i = 50; i < 55; i++) {
      bestMusic.push(nominees.ops[i].nominee)
    }  
  }
  getBestMusic()

  bestSound = []
  const getBestSound = () => {
    for (let i = 55; i < 60; i++) {
      bestSound.push(nominees.ops[i].nominee)
    }  
  }
  getBestSound()

  bestOriginalSong = []
  const getBestOriginalSong = () => {
    for (let i = 60; i < 65; i++) {
      bestOriginalSong.push(nominees.ops[i].nominee)
    }  
  }
  getBestOriginalSong()

  bestAnimatedFilm = []
  const getBestAnimatedFilm = () => {
    for (let i = 65; i < 70; i++) {
      bestAnimatedFilm.push(nominees.ops[i].nominee)
    }  
  }
  getBestAnimatedFilm()

 
  const categories = await Category.collection.insertMany([
    {title: "Best Picture", nominees: bestPicture},
    {title: "Best Actor", nominees: bestActor},
    {title: "Best Actress", nominees: bestActress },
    {title: "Best Supporting Actor", nominees: bestSupportingActor  },
    {title: "Best Supporting Actress", nominees: bestSupportingActress },
    {title: "Best Director", nominees: bestDirector },
    {title: "Best Adapted Screenplay", nominees: bestAdaptedScreenplay },
    {title: "Best Original Screenplay", nominees: bestOriginalScreenplay },
    {title: "Best Visual Effects", nominees: bestVisualEffects },
    {title: "Best Music", nominees: bestMusic },
    {title: "Best Sound", nominees: bestSound },
    {title: "Best Original Song", nominees: bestOriginalSong },
    {title: "Best Animated Film", nominees: bestAnimatedFilm },
  ]);

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
