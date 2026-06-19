const findTheOldest = function (people) {
  return people.reduce((oldest, person) => {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = new Date().getFullYear();
    }
    if (oldest.yearOfDeath === undefined) {
      oldest.yearOfDeath = new Date().getFullYear();
    }
    const age1 = person.yearOfDeath - person.yearOfBirth;
    const age2 = oldest.yearOfDeath - oldest.yearOfBirth;

    return age2 > age1 ? oldest : person;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
