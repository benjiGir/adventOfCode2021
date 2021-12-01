const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8')
const inputArr = input.split('\n')

let increased = 0
let previousValue = 0

inputArr.forEach((value, index) => {
  index === 0 ? previousValue = value : null

  value > previousValue ? increased++ : null
  previousValue = value
})

console.log(increased);