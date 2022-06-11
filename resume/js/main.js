var firstName = "Pumin ";
var lastName = "Mueannarin";
console.log(firstName + lastName);

var subjects = [
  1422111,
  "Principles of Statistics",
  1418496,
  "Selected Topic in Computer Science"
];
console.log(subjects);

console.log(subjects[0]);
for (let i = 0; i < subjects.length; i++) {
  console.log("index:", subjects[i]);
}

function calBMI(w, h, BMI) {
  BMI = w / (h * 2);
  return BMI;
}
var r = calBMI(62, 1.71);
console.log("ค่าBMI=", r, "MEN");
for (let i = 0; i <= calBMI.length; i++) {
  console.log(62 / (1.71 * 2)[i]);
}

var object = [
  "จบมัธยมศึกษาตอนต้นปี 2557",
  "จบมัธยมศึกษาตอนปลายปี 2560",
  "จบปริญญาตรีปี 2565"
];
console.log(object);

function calGradYear(x, GradYear) {
  GradYear = 2565 - x;
  return GradYear;
}
var b = calGradYear(2565);
console.log("ปีที่จบเมื่อเทียบกับปีปัจจุบัน", b);

console.log(calGradYear[0]);
for (let i = 0; i <= calGradYear.length; i++) {
  console.log(2565 - calGradYear[i]);
}

console.log(calGradYear(2565));

const students = [
  {
    id: 5830252406,
    name: "Pongsakorn",
    major: "IT",
    Gender: "Male"
  },
  {
    id: 6130200439,
    name: "Tanongsak",
    major: "CS",
    Gender: "Male"
  },
  {
    id: 6130200765,
    name: "Mongkhon",
    major: "CS",
    Gender: "Male"
  },
  {
    id: 6130200048,
    name: "Kritsanu",
    major: "CS",
    Gender: "Male"
  },
  {
    id: 6130200978,
    name: "Amornrat",
    major: "CS",
    Gender: "Female"
  },
  {
    id: 6130200706,
    name: "Pattarachai",
    major: "CS",
    Gender: "Male"
  },
  {
    id: 6130200749,
    name: "Pumin",
    major: "CS",
    Gender: "Male"
  }
];

function checkMajor() {
  let results = [];
  for (let i = 0; i < students.length; i++) {
    const id = students[i].id;
    if (id < 6130200000) {
      results.push(students[i].name + " are information technology.");
    } else {
      results.push(students[i].name + " are computer science student.");
    }
  }
  return results;
}

console.log(checkMajor());

function countGender() {
  let count_Male = 0;
  let count_Female = 0;
  for (let i = 0; i < students.length; i++) {
    Gender = students[i].Gender;
    if (Gender === "Male") {
      count_Male = count_Male + 1;
    } else {
      count_Female = count_Female + 1;
    }
  }
  return "Male have " + count_Male + "\nFemale have " + count_Female;
}

console.log(countGender());
