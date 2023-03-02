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