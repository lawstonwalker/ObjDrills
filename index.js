const loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return (loaf.water / loaf.flour) * 100;
  },
};

// console.log(loaf.flour, loaf["water"]);
// console.log(loaf.hydration());

const uniqueObj = {
  foo: true,
  bar: Math.PI,
  fum: "a value",
  quux: 300,
  key: "a key",
};

// for (let i in uniqueObj) {
//   console.log(uniqueObj.key);
// }

const mealObj = {
  meals: [
    "breakfast",
    "second breakfast",
    "elevenses",
    "lunch",
    "dinner",
    "supper",
  ],
};

// console.log(mealObj.meals[3])

const people = [
  { name: "Dillon", jobTitle: "Developer", boss: "Brandon" },
  { name: "Brandon", jobTitle: "Dog Walker", boss: "Bilbo" },
  { name: "Bilbo", jobTitle: "Dragon Slayer", boss: "Frodo" },
  { name: "Frodo", jobTitle: "Ring Destroyer" },
];

// people.forEach(obj => {
//   if (!obj.boss) {
//     console.log(`${obj.jobTitle} ${obj.name} doesn't report to anybody.`);
//   } else {
//     console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.boss}`);
//   }
// });
