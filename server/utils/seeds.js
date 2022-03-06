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
    {nominee: "Greig Fraser, Dune",  money: 0},
    {nominee: "Dan Laustsen, Nightmare Alley",  money: 0},
    {nominee: "Ari Wegner, The Power of the Dog",  money: 0},
    {nominee: "Bruno Delbonnel, The Tragedy of Macbeth",  money: 0},
    {nominee: "Janusz Kaminski, West Side Story",  money: 0},
    {nominee: "Jenny Beavan, Cruella",  money: 0},
    {nominee: "Massimo Cantini Parrini and Jacqueline Durran, Cyrano",  money: 0},
    {nominee: "Jacqueline West and Robert Morgan, Dune",  money: 0},
    {nominee: "Luis Sequeira, Nightmare Alley",  money: 0},
    {nominee: "Paul Tazewell, West Side Story",  money: 0},
    {nominee: "Ascension",  money: 0},
    {nominee: "Attica",  money: 0},
    {nominee: "Flee",  money: 0},
    {nominee: "Summer of Soul",  money: 0},
    {nominee: "Writing With Fire",  money: 0},
    {nominee: "Audible",  money: 0},
    {nominee: "Lead Me Home",  money: 0},
    {nominee: "The Queen of Basketball",  money: 0},
    {nominee: "Three Songs For Benazir",  money: 0},
    {nominee: "When We Were Bullies",  money: 0},
    {nominee: "Hank Corwin, Don't Look Up",  money: 0},
    {nominee: "Joe Walker, Dune",  money: 0},
    {nominee: "Pamela Martin, King Richard",  money: 0},
    {nominee: "Peter Sciberras, The Power of the Dog",  money: 0},
    {nominee: "Myron Kerstein and Andrew Weisblub, Tick, Tick... Boom!",  money: 0},
    {nominee: "Drive My Car",  money: 0},
    {nominee: "Flee",  money: 0},
    {nominee: "The Hand of God",  money: 0},
    {nominee: "Lunana: A Yak in the Classroom",  money: 0},
    {nominee: "The Worst Person in the World",  money: 0},
    {nominee: "Coming 2 America",  money: 0},
    {nominee: "Cruella",  money: 0},
    {nominee: "Dune",  money: 0},
    {nominee: "The Eyes of Tammy Faye",  money: 0},
    {nominee: "House of Gucci",  money: 0},
    {nominee: "Dune",  money: 0},
    {nominee: "Nightmare Alley",  money: 0},
    {nominee: "The Power of the Dog",  money: 0},
    {nominee: "The Tragedy of Macbeth",  money: 0},
    {nominee: "West Side Story",  money: 0},
    {nominee: "Affairs of the Art",  money: 0},
    {nominee: "Bestia",  money: 0},
    {nominee: "Boxballet",  money: 0},
    {nominee: "Robin Robin",  money: 0},
    {nominee: "The Windshield Wiper",  money: 0},
    {nominee: "Ala Kachuu - Take and Run",  money: 0},
    {nominee: "The Dress",  money: 0},
    {nominee: "The Long Goodbye",  money: 0},
    {nominee: "On My Mind",  money: 0},
    {nominee: "Please Hold",  money: 0},
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

  bestCinematography = []
  const getBestCinematography = () => {
    for (let i = 70; i < 75; i++) {
      bestCinematography.push(nominees.ops[i].nominee)
    }  
  }
  getBestCinematography()

  bestCostumeDesign = []
  const getBestCostumeDesign = () => {
    for (let i = 75; i < 80; i++) {
      bestCostumeDesign.push(nominees.ops[i].nominee)
    }  
  }
  getBestCostumeDesign()

  bestDocumentary = []
  const getBestDocumentary = () => {
    for (let i = 80; i < 85; i++) {
      bestDocumentary.push(nominees.ops[i].nominee)
    }  
  }
  getBestDocumentary()

  bestShortDocumentary = []
  const getBestShortDocumentary = () => {
    for (let i = 85; i < 90; i++) {
      bestShortDocumentary.push(nominees.ops[i].nominee)
    }  
  }
  getBestShortDocumentary()

  bestEditing = []
  const getBestEditing = () => {
    for (let i = 90; i < 95; i++) {
      bestEditing.push(nominees.ops[i].nominee)
    }  
  }
  getBestEditing()

  bestInternationalFilm = []
  const getBestInternationalFilm = () => {
    for (let i = 95; i < 100; i++) {
      bestInternationalFilm.push(nominees.ops[i].nominee)
    }  
  }
  getBestInternationalFilm()

  bestMakeupAndHairstyling = []
  const getBestMakeupAndHairstyling = () => {
    for (let i = 100; i < 105; i++) {
      bestMakeupAndHairstyling.push(nominees.ops[i].nominee)
    }  
  }
  getBestMakeupAndHairstyling()

  bestProductionDesign = []
  const getBestProductionDesign = () => {
    for (let i = 105; i < 110; i++) {
      bestProductionDesign.push(nominees.ops[i].nominee)
    }  
  }
  getBestProductionDesign()

  bestAnimatedShortFilm = []
  const getBestAnimatedShortFilm = () => {
    for (let i = 110; i < 115; i++) {
      bestAnimatedShortFilm.push(nominees.ops[i].nominee)
    }  
  }
  getBestAnimatedShortFilm()

  bestLiveActionShortFilm = []
  const getBestLiveActionShortFilm = () => {
    for (let i = 115; i < 120; i++) {
      bestLiveActionShortFilm.push(nominees.ops[i].nominee)
    }  
  }
  getBestLiveActionShortFilm()

 
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
    {title: "Best Original Score", nominees: bestMusic },
    {title: "Best Sound", nominees: bestSound },
    {title: "Best Original Song", nominees: bestOriginalSong },
    {title: "Best Animated Feature Film", nominees: bestAnimatedFilm },
    {title: "Best Cinematography", nominees: bestCinematography },
    {title: "Best Costume Design", nominees: bestCostumeDesign },
    {title: "Best Documentary Feature", nominees: bestDocumentary },
    {title: "Best Documentary Short Subject", nominees: bestShortDocumentary },
    {title: "Best Film Editing", nominees: bestEditing },
    {title: "Best International Feature Film", nominees: bestInternationalFilm },
    {title: "Best Makeup and Hairstyling", nominees: bestMakeupAndHairstyling },
    {title: "Best Production Design", nominees: bestProductionDesign },
    {title: "Best Animated Short Film", nominees: bestAnimatedShortFilm },
    {title: "Best Live Action Short Film", nominees: bestLiveActionShortFilm },
  ]);

  console.log('categories seeded');

  await User.create({
    userName: 'test',
    email: 'test@test.com',
    password: '123456',
    accountBalance: 100,
  });

  await User.create({
    userName: 'test222',
    email: 'test222@test.com',
    password: '123456',
    accountBalance: 100,
  });

  console.log('users seeded');

  process.exit();
});
