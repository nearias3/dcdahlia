const books = [
  {
    id: 1,
    slug: "a-killer-time",

    metadata: {
      title: "A Killer Time",
      subtitle: "subtitle",
      series: "series title",
      releaseDate: "2024",
      genre: "Murder Mystery",
    },

    media: {
      coverImage: "/images/books/akillertimecover.jpg",
    },

    descriptions: {
      short:
        "High school is hard enough with homework, love triangles, and prom; but throw a killer in the mix, and suddenly surviving high school has a whole new meaning.",
      long: "What do Wrenford's admired athlete, annoying know-it-all, biggest geek, most promiscuous girl, infamous bad boy, and favorite troublemaker all have in common? We're the prime suspects in the murder of our classmate, Roy Wilson. High school is hard enough with homework, love triangles, and prom; but throw a killer in the mix, and suddenly surviving high school has a whole new meaning. Getting A's doesn't seem as important when someone close to you could be stalking you and you keep tripping over dead bodies. I know these aren't actually supposed to be the best years of our lives, but I also didn't expect them to possibly be our last. Now with a killer on the loose, it's up to a group of moody teenagers and a detective who has had just about enough of us to solve this case and stay alive. At least, if I die, I don't have to do homework anymore.",
    },

    links: {
      amazon: "",
      barnesAndNoble: "",
      bookshop: "",
    },

    caseFile: {
      suspects: [
        {
          id: "suspect-1",
          name: "Character Name",
          role: "Suspect",
          status: "Person of Interest",
          age: "",
          grade: "",
          knownFor: "",
          lastSeen: "",
          alibi: "",
          notes: "Character notes coming soon.",
          photo: "",
        },
      ],
      clues: [
        {
          id: 1,
          title: "Clue Title",
          description: "Clue details coming soon.",
        },
      ],
      timeline: [
        {
          id: 1,
          time: "Time unknown",
          event: "Timeline event coming soon.",
        },
      ],
    },
  },
];

export default books;
