// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multipliedBy100 (num) {
    return num * 100;
}

console.log(numbers.map(multipliedBy100));

let numbersMultipliedBy100 = numbers.map(function multiple(number) {
  return number * 100;
});

console.log(numbersMultipliedBy100)

let numbersMultiplied = numbers.map(number => {
  return number * 100;
});

console.log(numbersMultiplied);

let numbersMultipliedByHundred = numbers.map(number => number * 100);

console.log(numbersMultipliedBy100);
