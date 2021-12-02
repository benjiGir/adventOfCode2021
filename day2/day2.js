const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')
const inputArr = input.split('\n')

let horizontal = 0
let depth = 0
let aim = 0

// Part one
inputArr.forEach((input)=> {
  const tempArr = input.split(" ")
  if (tempArr[0] === 'forward') horizontal += Number(tempArr[1])
  else if (tempArr[0] === 'up') depth -= Number(tempArr[1])
  else if (tempArr[0] === 'down') depth += Number(tempArr[1])
})

// Part two
inputArr.forEach((input)=> {
  const tempArr = input.split(" ")
  if (tempArr[0] === 'forward') {
    horizontal += Number(tempArr[1])
    depth += aim * Number(tempArr[1])
  }
  else if (tempArr[0] === 'up') aim -= Number(tempArr[1])
  else if (tempArr[0] === 'down') aim += Number(tempArr[1])
})
