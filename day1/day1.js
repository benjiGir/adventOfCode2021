const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8')
const inputArr = input.split('\n')

const count = () => {
  let increased = 0
  let previousValue = 0
  let nextOne = 0

  for (let i = 0; i < inputArr.length - 1; i++) {
    previousValue = Number(inputArr[i]);
    nextOne = Number(inputArr[i + 1]);
  
    console.log(previousValue, nextOne);
  
    if (nextOne > previousValue) {
      increased = increased + 1;
    }
  }

  return increased
}

console.log(count());