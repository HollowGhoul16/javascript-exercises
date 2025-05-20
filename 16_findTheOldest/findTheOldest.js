const findTheOldest = function(arr) {
    let max = 0;
    let obj = {};
    let today = new Date();
    let thisYear = today.getFullYear();
    for(const person of arr) {
        if(!('yearOfBirth' in person)) continue;
        if(!('yearOfDeath' in person)) {
            max = thisYear - person.yearOfBirth;
            obj = person;
        }
        if((person.yearOfDeath - person.yearOfBirth) > max) {
            max = person.yearOfDeath - person.yearOfBirth;
            obj = person;
        }
    }
    return obj;
};

// Do not edit below this line
module.exports = findTheOldest;
