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
          id: "roy-wilson",
          name: "Roy Wilson",
          role: "Victim",
          status: "Victim",
          age: "17 years old",
          knownAs: "Wrenford's Resident PLAYER",
          alibi: "N/A",
          notes:
            "Caucasian Male. Athlete. Bludgeoned to death. Murder weapon missing.",
          photo: "",
          playlistLink: "",
        },
        {
          id: "skyler-hartley",
          name: "Skyler Hartley",
          role: "Suspect",
          status: "Person of Interest",
          age: "16",
          knownAs: "Wrenford's Resident REBEL",
          alibi: "",
          notes:
            "Ex-girlfriend of victim's brother. Sent to headmaster's office more than anyone in her class. Best friends with Penny - very protective of her. LAST TO SEE VICTIM ALIVE.",
          photo: "",
          playlistLink:
            "https://open.spotify.com/playlist/1mHhO7q83KgJ0ILGhDp7oS?go=1&sp_cid=addfd533-d6ec-4d2d-8738-cc70379f15ba&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=fe62596409714c3c",
        },
        {
          id: "drew-morrison",
          name: "Drew Morrison",
          role: "Suspect",
          status: "Person of Interest",
          age: "16",
          knownAs: "Wrenford's Resident BAD BOY",
          alibi: "",
          notes:
            "Richest student at Wrenford. Reputation for breaking the rules. HATES victim.",
          photo: "",
          playlistLink:
            "https://open.spotify.com/playlist/5q3dbEVauNYy3DEToGnXnw?go=1&sp_cid=addfd533-d6ec-4d2d-8738-cc70379f15ba&utm_source=embed_player_p&utm_medium=desktop",
        },
        {
          id: "penny-paulson",
          name: "Penny Paulson",
          role: "Suspect",
          status: "Person of Interest",
          age: "16",
          knownAs: "Wrenford's Resident SLUT",
          alibi: "",
          notes:
            "Having affair with victim. Close friends with Skylar and Drew. Conquest well known. Angry victim wouldn't leave girlfriend for her?",
          photo: "",
          playlistLink:
            "https://open.spotify.com/playlist/2I5lusekzfJQIfhMjSbCIW?go=1&sp_cid=addfd533-d6ec-4d2d-8738-cc70379f15ba&utm_source=embed_player_p&utm_medium=desktop",
        },
        {
          id: "henry-parker",
          name: "Henry Parker",
          role: "Suspect",
          status: "Person of Interest",
          age: "17",
          knownAs: "Wrenford's Resident GOLDEN BOY",
          alibi: "",
          notes:
            "Victim's best friend. Popular athlete. Dating victim's sister. Victim possibly disapproved?",
          photo: "",
          playlistLink:
            "https://open.spotify.com/playlist/2PfrQVBfZcpRXKaCn2FYW9?go=1&sp_cid=addfd533-d6ec-4d2d-8738-cc70379f15ba&utm_source=embed_player_p&utm_medium=desktop",
        },
        {
          id: "hailee-gruber",
          name: "Hailee Gruber",
          role: "Suspect",
          status: "Person of Interest",
          age: "17",
          knownAs: "Wrenford's Resident KNOW-IT-ALL",
          alibi: "",
          notes:
            "Victim's official girlfriend. Valedictorian. Co-president of the Physics, Chess, and Mathematics Club. Knew victim was cheating on her?",
          photo: "",
          playlistLink:
            "https://open.spotify.com/playlist/6UIkT76nuvzlRG3bSkVP1Y?go=1&sp_cid=addfd533-d6ec-4d2d-8738-cc70379f15ba&utm_source=embed_player_p&utm_medium=desktop",
        },
        {
          id: "nolan-lott",
          name: "Nolan Lott",
          role: "Suspect",
          status: "Person of Interest",
          age: "",
          knownAs: "Wrenford's Resident GEEK",
          alibi: "",
          notes:
            "Top 3 in class. Co-president of the Physics, Chess, and Mathematics Club. Hailee's ex-boyfriend - angry she left him for victim?",
          photo: "",
          playlistLink:
            "https://open.spotify.com/playlist/63A1BjLldUvk935geeLTcv?go=1&sp_cid=addfd533-d6ec-4d2d-8738-cc70379f15ba&utm_source=embed_player_p&utm_medium=desktop",
        },
        {
          id: "gina-wilson",
          name: "Gina Wilson",
          role: "Suspect",
          status: "Person of Interest",
          age: "15",
          knownAs: "Roy's Kid Sister",
          alibi: "",
          notes:
            "Victim's sister. Dating his best friend - disapproved? Sibling rivalry?",
          photo: "",
          playlistLink:
            "https://open.spotify.com/playlist/5flbZ7sbV0CXdaM9uokiuv?go=1&sp_cid=addfd533-d6ec-4d2d-8738-cc70379f15ba&utm_source=embed_player_p&utm_medium=desktop",
        },
        {
          id: "ben-zales",
          name: "Ben Zales",
          role: "Suspect",
          status: "Person of Interest",
          age: "",
          knownAs: "",
          alibi: "",
          notes: "Suspect notes coming soon.",
          photo: "",
          playlistLink: "",
        },
        {
          id: "jesse-diaz",
          name: "Jesse Diaz",
          role: "Suspect",
          status: "Person of Interest",
          age: "",
          knownAs: "",
          alibi: "",
          notes: "Suspect notes coming soon.",
          photo: "",
          playlistLink: "",
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
