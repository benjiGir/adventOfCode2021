const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8')
const inputArr = input.split('\n')

// Part one
const count = () => {
  let increased = 0
  let previousValue = 0
  let nextOne = 0

  for (let i = 0; i < inputArr.length - 1; i++) {
    previousValue = Number(inputArr[i]);
    nextOne = Number(inputArr[i + 1]);
  
    if (nextOne > previousValue) {
      increased = increased + 1
    }
  }

  return increased
}

// Part two
const countWindow = () => {
  let increased = 0
  let previousWindow = 0
  let nextWindow = 0

  for (let i = 0; i < inputArr.length - 1; i++) {
    previousWindow = Number(inputArr[i]) + Number(inputArr[i + 1]) + Number(inputArr[i + 2])
    nextWindow = Number(inputArr[i + 1]) + Number(inputArr[i + 2]) + Number(inputArr[i + 3])
    if (nextWindow > previousWindow) {
      increased = increased + 1
    }
  }

  return increased
}
