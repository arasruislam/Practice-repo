// access Sophia’s secondary school location?
/* 
let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC primary school" },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          { school_name: "ABC secondary school" },

          { location: "St Lorence" },
        ],
      },
    ],
  },
};
*/
// console.log(data.Sophia.study[1].secondary[1].location);

// ! Another one
/* 
let data = [
  {
    pHeroCourses: {
      "course-x": "web development",
    },
  },
  {
    pHeroCourses: {
      "course-y": "phitron",
    },
  },
  {
    pHeroCourses: {
      "course-z": "acc",
    },
  },
  {
    pHeroCourses: {
      "course-xyz": "level-2",
    },
    locationField: {
      "en-US": {
        lat: 19.28563,
        lon: 72.8691,
      },
    },
  },
];
*/
// 2) How will you get the output [Advanced - uses 2D matrix concept] a) level-2, b) 72.8621

// console.log(data[3]?.pHeroCourses["course-xyz"], (data[3]?.locationField["en-US"]?.lon));

/* 
let activities = {
  activity1: [
    {
      name: "listen on spotify",
      song_list: {
        song_1: "abc",
        song_2: "bcd",
      },
      id: 1,
    },
    {
      name: "listen music through bot",

      song_list: {
        song_1: "wxy",
        song_2: "xyz",
      },
      id: 2,
    },
  ],
};
*/
// How will you get the output | a) abc | b) xyz
// console.log(activities.activity1[0].song_list.song_1);
// console.log(activities.activity1[1].song_list.song_2);

/* 
let students = {
  2222: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Jonson",
      city: "Petersburg",
      country: "UK",
    },
  },
  3333: {
    name: "Herry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      street: "DC road",
      city: "Kachukhet",
      country: "Bangladesh",
    },
  },
};
*/
// 4) How will you display | a) Petersburg | b) Herry
// console.log(students[2222]?.address?.city);
// console.log(students[3333]?.name);



/* 
let instructor = {
  name: "Jhankar Mahbub",
  entrepreneur: true,
  additionalData: {
    writer: true,
    favoriteHobbies: ["travelling", "Coding"],
    books: ["programming er bolod to bos", "programming er coddogosti"],
    moreDetails: {
      favoriteBasketballTeam: "XYZ",
      isYoungest: true,
      hometown: {
        city: "ABC",
        state: "VW",
      },
      countriesLivedIn: ["Bangladesh", "New York"],
    },
  },
};
*/

// 5) How will you display | a) programming er coddogosti | b) VW | c) Bangladesh

// console.log(instructor.additionalData?.books[1]);
// console.log(instructor.additionalData?.moreDetails?.hometown?.state);
// console.log(instructor.additionalData?.moreDetails?.countriesLivedIn[0]);


/* 
const studentData = [
  {
    class: 10,
    details: [
      {
        studentId: "1",
        gradingDetails: [{ grade: "A" }],
      },
      {
        studentId: "2",
        gradingDetails: [{ grade: "B" }],
      },
    ],
  },
  {
    class: 11,
    details: [
      {
        studentId: 3,
        gradingDetails: [{ grade: "B" }],
      },
      {
        studentId: 4,
        gradingDetails: [{ grade: "D" }],
      },
    ],
  },
];
*/
// 6) How will you display | a)B | b) D
// const detials = studentData[1]?.details;
// for (const detail of detials) {
//     console.log(detail.gradingDetails[0].grade);
// }

