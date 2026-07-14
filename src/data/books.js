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

      caseNumber: "AKT-2024-001",
      leadDetective: "Detective Bennett",
      caseStatus: "UNSOLVED",
      setting: "Wrenford Academy",
      victim: "Roy Wilson",
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
        title: "The murder mystery you've waited for",
        body: "This debut book was a delight to read. Every time I put it down, I felt like I had paused a movie and couldn't wait to get back to it.",
        source: "Reader Review",
      },
      {
        id: 2,
        title: "Couldn't put it down",
        body: "This book kept me on the edge of my seat the entire time. Really hoping for a sequel because I'm definitely not done with these characters yet.",
        source: "Reader Review",
      },
      {
        id: 3,
        title: "Breakfast Club Meets Murder Mystery",
        body: "Wow. Wow. Wow. It's a great YA mystery with great characters and growth. This book would make a great movie—it has all the suspense and thrills... and of course murder!",
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
          age: "17",
          knownAs: "Wrenford's Resident PLAYER",
          alibi: "N/A",
          suspicionLevel: "Victim",
          notes:
            "Caucasian Male. Athlete. Bludgeoned to death. Murder weapon missing.",
          photo: "/images/books/akillertime/roy.jpeg",
          playlistLink: "",
          boardPosition: { x: 50, y: 50 },
          rotation: -3,
        },
        {
          id: "skyler-hartley",
          name: "Skyler Hartley",
          role: "Suspect",
          status: "Person of Interest",
          age: "17",
          knownAs: "Wrenford's Resident REBEL",
          alibi:
            "Claims to have spent the night in the computer lab working on an essay, then spent time with victim at crime scene. Timeline puts her close to time of death. Spent the night with Ben. All accounts verified.",
          suspicionLevel: "High",
          notes:
            "Ex-girlfriend of victim's brother. Sent to headmaster's office more than anyone in her class. Best friends with Penny - very protective of her. LAST TO SEE VICTIM ALIVE.",
          photo: "/images/books/akillertime/skyler.jpeg",
          playlistLink:
            "https://open.spotify.com/playlist/1mHhO7q83KgJ0ILGhDp7oS?go=1&sp_cid=addfd533-d6ec-4d2d-8738-cc70379f15ba&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=fe62596409714c3c",
          boardPosition: { x: 25, y: 42 },
          rotation: 2,
        },
        {
          id: "drew-morrison",
          name: "Drew Morrison",
          role: "Suspect",
          status: "Person of Interest",
          age: "17",
          knownAs: "Wrenford's Resident BAD BOY",
          alibi:
            "Claims to have been playing poker with Penny and Ben. Time mostly accounted for with some gaps.",
          suspicionLevel: "High",
          notes:
            "Richest student at Wrenford. Reputation for breaking the rules. HATES victim.",
          photo: "/images/books/akillertime/drew.jpeg",
          playlistLink:
            "https://open.spotify.com/playlist/5q3dbEVauNYy3DEToGnXnw?go=1&sp_cid=addfd533-d6ec-4d2d-8738-cc70379f15ba&utm_source=embed_player_p&utm_medium=desktop",
          boardPosition: { x: 38, y: 13 },
          rotation: -1,
        },
        {
          id: "penny-paulson",
          name: "Penny Paulson",
          role: "Suspect",
          status: "Person of Interest",
          age: "17",
          knownAs: "Wrenford's Resident SLUT",
          alibi:
            "Claims to have hung out with Drew and Ben before going to bed. Corroborated by Drew.",
          suspicionLevel: "Medium",
          notes:
            "Having affair with victim. Close friends with Skylar and Drew. Conquest well known. Angry victim wouldn't leave girlfriend for her?",
          photo: "/images/books/akillertime/penny.jpeg",
          playlistLink:
            "https://open.spotify.com/playlist/2I5lusekzfJQIfhMjSbCIW?go=1&sp_cid=addfd533-d6ec-4d2d-8738-cc70379f15ba&utm_source=embed_player_p&utm_medium=desktop",
          boardPosition: { x: 25, y: 80 },
          rotation: 4,
        },
        {
          id: "henry-parker",
          name: "Henry Parker",
          role: "Suspect",
          status: "Person of Interest",
          age: "17",
          knownAs: "Wrenford's Resident GOLDEN BOY",
          alibi:
            "Claims to have witnessed fight between victim and Hailee. Comforted Hailee in common room. Account corroborated by Hailee and Gina.",
          suspicionLevel: "Low",
          notes:
            "Victim's best friend since childhood. Popular athlete. Dating victim's sister. Victim possibly disapproved?",
          photo: "/images/books/akillertime/henry.jpeg",
          playlistLink:
            "https://open.spotify.com/playlist/2PfrQVBfZcpRXKaCn2FYW9?go=1&sp_cid=addfd533-d6ec-4d2d-8738-cc70379f15ba&utm_source=embed_player_p&utm_medium=desktop",
          boardPosition: { x: 69, y: 14 },
          rotation: -2,
        },
        {
          id: "hailee-gruber",
          name: "Hailee Gruber",
          role: "Suspect",
          status: "Person of Interest",
          age: "17",
          knownAs: "Wrenford's Resident KNOW-IT-ALL",
          alibi:
            "Claims to have gotten in a fight with victim, then spent the remainder of the evening in the common room with Henry and Gina. Roommate also places her away from the crime scene.",
          suspicionLevel: "Medium",
          notes:
            "Victim's official girlfriend. Valedictorian. Co-president of the Physics, Chess, and Mathematics Club. Knew victim was cheating on her?",
          photo: "/images/books/akillertime/hailee.jpeg",
          playlistLink:
            "https://open.spotify.com/playlist/6UIkT76nuvzlRG3bSkVP1Y?go=1&sp_cid=addfd533-d6ec-4d2d-8738-cc70379f15ba&utm_source=embed_player_p&utm_medium=desktop",
          boardPosition: { x: 68, y: 74 },
          rotation: 1.5,
        },
        {
          id: "nolan-lott",
          name: "Nolan Lott",
          role: "Suspect",
          status: "Person of Interest",
          age: "17",
          knownAs: "Wrenford's Resident GEEK",
          alibi:
            "Claims to have been in the library, then the common room to witness fight between victim and Hailee. Account of former corroborrated by Physics club.",
          suspicionLevel: "Medium",
          notes:
            "Top 3 in class. Co-president of the Physics, Chess, and Mathematics Club. Hailee's ex-boyfriend - angry she left him for victim?",
          photo: "/images/books/akillertime/nolan.jpeg",
          playlistLink:
            "https://open.spotify.com/playlist/63A1BjLldUvk935geeLTcv?go=1&sp_cid=addfd533-d6ec-4d2d-8738-cc70379f15ba&utm_source=embed_player_p&utm_medium=desktop",
          boardPosition: { x: 88, y: 70 },
          rotation: 3.5,
        },
        {
          id: "gina-wilson",
          name: "Gina Wilson",
          role: "Suspect",
          status: "Person of Interest",
          age: "16",
          knownAs: "Roy's SISTER",
          alibi:
            "Claims to have been with Hailee in common room comforting her after fight with victim. Their timelines appear consistent.",
          suspicionLevel: "Low",
          notes:
            "Victim's sister. Dating his best friend - disapproved? Sibling rivalry?",
          photo: "/images/books/akillertime/gina.jpeg",
          playlistLink:
            "https://open.spotify.com/playlist/5flbZ7sbV0CXdaM9uokiuv?go=1&sp_cid=addfd533-d6ec-4d2d-8738-cc70379f15ba&utm_source=embed_player_p&utm_medium=desktop",
          boardPosition: { x: 90, y: 40 },
          rotation: 1,
        },
        {
          id: "ben-zales",
          name: "Ben Zales",
          role: "Suspect",
          status: "Person of Interest",
          age: "17",
          knownAs: "Skyler's CURRENT FLAME",
          alibi:
            "Spent evening with Penny and Drew, night with Skyler in his room. Both accounts corroborated.",
          suspicionLevel: "Low",
          notes:
            "In sexual relationship with Skyler. Roommates with Drew. Would do anything for them?",
          photo: "/images/books/akillertime/ben.jpeg",
          playlistLink: "",
          boardPosition: { x: 10, y: 12 },
          rotation: 3,
        },
        {
          id: "jesse-diaz",
          name: "Jesse Diaz",
          role: "Suspect",
          status: "Person of Interest",
          age: "17",
          knownAs: "Skyler's EX-BOYFRIEND",
          alibi: "N/A",
          suspicionLevel: "Low",
          notes:
            "Used to date Skyler, who also dated victim's brother and was perhaps involved with victim. Jealousy?",
          photo: "/images/books/akillertime/jesse.jpeg",
          playlistLink: "",
          boardPosition: { x: 8, y: 42 },
          rotation: -1.5,
        },
      ],

      relationships: [
        {
          id: 1,
          from: "skyler-hartley",
          to: "roy-wilson",
          label: "LAST SEEN TOGETHER",
          color: "orange",
          notePosition: { x: 37, y: 50 },
        },
        {
          id: 2,
          from: "penny-paulson",
          to: "roy-wilson",
          label: "SECRET AFFAIR",
          color: "red",
          notePosition: { x: 37, y: 69 },
        },
        {
          id: 3,
          from: "hailee-gruber",
          to: "roy-wilson",
          label: "DATING",
          color: "pink",
          notePosition: { x: 60, y: 67 },
        },
        {
          id: 4,
          from: "hailee-gruber",
          to: "nolan-lott",
          label: "EXES",
          color: "red",
          notePosition: { x: 78, y: 76 },
        },
        {
          id: 5,
          from: "gina-wilson",
          to: "roy-wilson",
          label: "SIBLINGS",
          color: "blue",
          notePosition: { x: 70, y: 49 },
        },
        {
          id: 6,
          from: "henry-parker",
          to: "roy-wilson",
          label: "BEST FRIENDS",
          color: "green",
          notePosition: { x: 62, y: 31 },
        },
        {
          id: 7,
          from: "henry-parker",
          to: "gina-wilson",
          label: "DATING",
          color: "pink",
          notePosition: { x: 76, y: 29 },
        },
        {
          id: 8,
          from: "drew-morrison",
          to: "roy-wilson",
          label: "ENEMIES",
          color: "yellow",
          notePosition: { x: 42, y: 30 },
        },
        {
          id: 9,
          from: "skyler-hartley",
          to: "penny-paulson",
          label: "BEST FRIENDS",
          color: "green",
          notePosition: { x: 25, y: 61 },
        },

        {
          id: 11,
          from: "skyler-hartley",
          to: "ben-zales",
          label: "HOOKING UP",
          color: "purple",
          notePosition: { x: 16, y: 28 },
        },
        {
          id: 12,
          from: "skyler-hartley",
          to: "jesse-diaz",
          label: "EXES",
          color: "red",
          notePosition: { x: 16, y: 46 },
        },
      ],

      evidencePhotos: [
        {
          id: "bridge",
          appearance: "polaroid",
          title: "Crime Scene",
          subtitle: "BRIDGE",
          image: "/images/books/akillertime/bridge.jpeg",
          boardPosition: {
            x: 50,
            y: 84,
          },
          rotation: 3,
        },
        {
          id: "school",
          appearance: "polaroid",
          title: "Wrenford Academy",
          subtitle: "EXTERIOR",
          image: "/images/books/akillertime/wrenford.jpeg",
          boardPosition: {
            x: 86,
            y: 14,
          },
          rotation: -2,
        },
        {
          id: "hallway",
          appearance: "polaroid",
          title: "Wrenford Academy",
          subtitle: "HALLWAY",
          image: "/images/books/akillertime/hallway.jpeg",
          boardPosition: {
            x: 10,
            y: 73,
          },
          rotation: -1,
        },
        {
          id: "door",
          appearance: "polaroid",
          title: "Dorm",
          subtitle: "ROY'S ROOM",
          image: "/images/books/akillertime/door.jpeg",
          boardPosition: {
            x: 53,
            y: 14,
          },
          rotation: -2,
        },
        {
          id: "note",
          appearance: "paper",
          title: "Anonymous Note",
          image: "/images/books/akillertime/detectivenote.jpeg",
          boardPosition: {
            x: 27,
            y: 23,
          },
          rotation: -3,
        },
      ],

      clues: [
        {
          id: 1,
          type: "Evidence",
          title: "Missing Murder Weapon",
          description:
            "The weapon used to kill Roy Wilson has not been recovered.",
        },
        {
          id: 2,
          type: "Witness Statement",
          title: "Last Seen Alive",
          description:
            "Skyler Hartley was reportedly the last person to see Roy alive.",
        },
        {
          id: 3,
          type: "Motive",
          title: "Relationship Trouble",
          description:
            "Multiple suspects had romantic or personal conflicts with Roy.",
        },
      ],

      timeline: [
        {
          id: 1,
          time: "10:30 PM",
          event: "One of the suspects is seen out around campus.",
        },
        {
          id: 2,
          time: "10:45 PM",
          event: "Skyler Hartley is reportedly seen with Roy Wilson.",
        },
        {
          id: 3,
          time: "11:13 PM",
          event: "Roy Wilson dies.",
        },
      ],
    },
  },
];

export default books;
