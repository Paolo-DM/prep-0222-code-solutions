function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('Sum:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var hoursToMinutesResult = convertHoursToMinutes(2);
console.log('Hours to minutes:', hoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name + '!';
  // return `Hello ${name}!`;
}

var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('Add and multiply by 5:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('Multiply and divide by 5:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtraction = subtractTwoNumbers(22, 7);
console.log('Subtraction:', subtraction);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('Circle circumference:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('Full name:', fullName);

function cube(number) {
  return number * number * number;
}

var cubeOfANumber = cube(5);
console.log('Cube:', cubeOfANumber);
