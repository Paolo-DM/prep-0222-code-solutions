const person = {
  firstName: 'Giuseppe',
  lastName: 'Verdi',
  hobby: 'Playing video games'
};

console.log(person);

const fullName = "The person's name is: " + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);

person.job = 'Web Developer';
console.log("The person's current job is: " + person.job + '.');

person.previousJob = 'Reporter';
console.log("The person's previous job is: " + person.previousJob + '.');

console.log('The complete person object:', person);
