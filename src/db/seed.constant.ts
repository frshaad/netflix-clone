import type { movies } from '@/db/schema';

export const movieDatabase: (typeof movies.$inferInsert)[] = [
  {
    title: 'Gran Turismo',
    ageRating: 12,
    duration: 135,
    overview:
      'The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.',
    videoUrl:
      'https://res.cloudinary.com/dsouibklx/video/upload/v1699471985/vxht66zpfit14wkgpj0a.mp4',
    imageUrl:
      'https://image.tmdb.org/t/p/original/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg',
    releaseYear: 2023,
    category: 'recent',
    youtubeUrl: 'https://www.youtube.com/embed/GVPzGBvPrzw',
  },
  {
    title: 'A Haunting in Venice',
    imageUrl:
      'https://image.tmdb.org/t/p/original/kHlX3oqdD4VGaLpB8O78M25KfdS.jpg',
    ageRating: 12,
    duration: 104,
    overview:
      'Celebrated sleuth Hercule Poirot, now retired and living in self-imposed exile in Venice, reluctantly attends a Halloween séance at a decaying, haunted palazzo. When one of the guests is murdered, the detective is thrust into a sinister world of shadows and secrets.',
    releaseYear: 2023,
    videoUrl: '',
    category: 'recent',
    youtubeUrl: 'https://www.youtube.com/embed/yEddsSwweyE',
  },
  {
    title: "Five Nights at Freddy's",
    ageRating: 16,
    duration: 90,
    overview:
      "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
    releaseYear: 2023,
    videoUrl: '',
    imageUrl:
      'https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg',
    category: 'recent',
    youtubeUrl: 'https://www.youtube.com/embed/0VH9WCFV6XQ',
  },

  {
    title: 'The Blacklist',
    ageRating: 16,
    duration: 0,
    imageUrl:
      'https://image.tmdb.org/t/p/original/dDPwCyZG8arYwMDoQl0sm4xccCE.jpg',
    overview: `Raymond "Red" Reddington, one of the FBI's most wanted fugitives, surrenders in person at FBI Headquarters in Washington, D.C. He claims that he and the FBI have the same interests: bringing down dangerous criminals and terrorists. In the last two decades, he's made a list of criminals and terrorists that matter the most but the FBI cannot find because it does not know they exist. Reddington calls this "The Blacklist". Reddington will co-operate, but insists that he will speak only to Elizabeth Keen, a rookie FBI profiler`,
    releaseYear: 2013,
    videoUrl: '',
    category: 'show',
    youtubeUrl: 'https://www.youtube.com/embed/-WYdUaK54fU',
  },
  {
    title: 'Suits',
    ageRating: 12,
    duration: 0,
    imageUrl:
      'https://image.tmdb.org/t/p/original/or0E36KfzJYZwqXeiCfm1JgepKF.jpg',
    overview:
      "While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, slips into a job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads, Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw talent and photographic memory.",
    releaseYear: 2011,
    videoUrl: '',
    category: 'show',
    youtubeUrl: 'https://www.youtube.com/embed/85z53bAebsI',
  },
  {
    title: 'Chernobyl',
    ageRating: 16,
    duration: 0,
    imageUrl:
      'https://image.tmdb.org/t/p/original/900tHlUYUkp7Ol04XFSoAaEIXcT.jpg',
    overview:
      'The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.',
    releaseYear: 2019,
    videoUrl: '',
    category: 'show',
    youtubeUrl: 'https://www.youtube.com/embed/s9APLXM9Ei8',
  },
  {
    title: 'Retribution',
    ageRating: 12,
    duration: 91,
    imageUrl:
      'https://image.tmdb.org/t/p/original/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg',
    overview:
      'When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.',
    releaseYear: 2023,
    videoUrl: '',
    category: 'recent',
    youtubeUrl: 'https://www.youtube.com/embed/jzQn0-WH4WM',
  },
  {
    title: 'Spider-Man: Across the Spider-Verse',
    ageRating: 12,
    duration: 122,
    imageUrl:
      'https://image.tmdb.org/t/p/original/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg',
    overview:
      'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
    releaseYear: 2023,
    videoUrl: '',
    category: 'movie',
    youtubeUrl: 'https://www.youtube.com/embed/shW9i6k8cB0',
  },

  {
    title: 'Coco',
    releaseYear: 2017,
    ageRating: 0,
    duration: 105,
    imageUrl:
      'https://image.tmdb.org/t/p/original/askg3SMvhqEl4OL52YuvdtY40Yb.jpg',
    overview:
      "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    videoUrl: '',
    category: 'movie',
    youtubeUrl: 'https://www.youtube.com/embed/xlnPHQ3TLX8',
  },
  {
    title: 'Monk',
    releaseYear: 2002,
    ageRating: 12,
    duration: 0,
    imageUrl:
      'https://image.tmdb.org/t/p/original/cTQYB39EwM01fl9b9KpNUgZfOsT.jpg',
    overview:
      "Adrian Monk was once a rising star with the San Francisco Police Department, legendary for using unconventional means to solve the department's most baffling cases. But after the tragic (and still unsolved) murder of his wife Trudy, he developed an extreme case of obsessive-compulsive disorder. Now working as a private consultant, Monk continues to investigate cases in the most unconventional ways.",
    videoUrl: '',
    category: 'show',
    youtubeUrl: 'https://www.youtube.com/embed/mftbaaU82Uc',
  },
  {
    title: 'Family Guy',
    ageRating: 16,
    duration: 0,
    imageUrl:
      'https://image.tmdb.org/t/p/original/y4PDksvxM05sNxacoU8xIYITCDA.jpg',
    overview:
      "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
    releaseYear: 1999,
    videoUrl: '',
    category: 'show',
    youtubeUrl: 'https://www.youtube.com/embed/7hRxWGo49oc',
  },
];
