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
      amazon:
        "https://www.amazon.com/dp/B0DPY3GYWN?ref=cm_sw_r_ffobk_cso_cp_apin_dp_SAPF6PNE1X746ZGN8ZJ7&ref_=cm_sw_r_ffobk_cso_cp_apin_dp_SAPF6PNE1X746ZGN8ZJ7&social_share=cm_sw_r_ffobk_cso_cp_apin_dp_SAPF6PNE1X746ZGN8ZJ7&peakEvent=5&starsLeft=1&skipTwisterOG=1&bestFormat=true&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnyowRr4HfbZVp27I3gmGyS1oB6vHVihp3diNJrOx8d9akE9zlz-jakKYEDoM_aem_hLgPiAMSe4HQ35jwIXF25A&utm_content=link_in_bio&utm_medium=social&utm_source=ig",
      barnesAndNoble:
        "https://www.barnesandnoble.com/w/a-killer-time-d-c-dahlia/1146662245?ean=9798893084184&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnsFZ2EoHaeZL2WbPd4CnIA51ogwDHpcG4in7C4kKXmuCrgx1JizQ3Nd01yVU_aem_sFawYY_YyWlC8bevyHqqkg",
      bookshop: "",
    },

    reviews: [
      {
        id: 1,
        quote: "The murder mystery you've waited for",
        source: "Reader Review",
      },
      {
        id: 2,
        quote: "Couldn't put it down.",
        source: "Reader review",
      },
      {
        id: 3,
        quote: "Breakfast club meets muder mystery",
        source: "Reader Review",
      },
    ],

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
