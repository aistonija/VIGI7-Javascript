class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(number) {
    typeof number !== "number"
      ? console.log("Invalid input: numberOfStudents must be set to a Number.")
      : (this._numberOfStudents = number);
  }

  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randIndex];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}

// Primary School
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
lorraineHansbury.quickFacts();
const teachersList = [
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
];
console.log(School.pickSubstituteTeacher(teachersList));
console.log(lorraineHansbury);

// High School
console.log("--------------------------------");
const teams = ["Baseball", "Basketball", "Volleyball", "Track and Field"];
const alSmith = new HighSchool("Al E. Smith", 415, teams);
alSmith.sportsTeams;
