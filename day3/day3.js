const fs = require('fs')
const data = fs.readFileSync('./input.txt', 'utf-8').replace(/(\r\n|\r)/gm, "").match(/.{1,12}/g)

let gammaRate = []
let epsilonRate = []
let powerCons = 0

// Part One
for (let i = 0; i < 12; i++) {
  let isZero = 0
  let isOne = 0
  for (let j = 0; j < data.length; j++) {
    data[j].charAt(i) === '1' ? isOne++ : isZero++ 
  }
  isOne > isZero ? gammaRate.push('1') : gammaRate.push('0')
}

gammaRate.forEach(bit => {
  bit === '1' ? epsilonRate.push('0') : epsilonRate.push('1')
})

powerCons = parseInt(gammaRate.join(''), 2) * parseInt(epsilonRate.join(''), 2)

//--------------------------------------------------------

let oxygenGen = data
let dioxygenScrubber = data

// Part Two
for (let i = 0; i < 12; i++) {
  let isZeroArr = []
  let isOneArr = []
  
  if (oxygenGen.length === 1) break

  for (let j = 0; j < oxygenGen.length; j++) {
    oxygenGen[j].charAt(i) === '1' ? isOneArr.push(oxygenGen[j]) : isZeroArr.push(oxygenGen[j])
  }
  if (isOneArr.length >= isZeroArr.length) {
    oxygenGen = []
    oxygenGen = isOneArr
  } else {
    oxygenGen = []
    oxygenGen = isZeroArr
  }
}

for (let i = 0; i < 12; i++) {
  let isZeroArr = []
  let isOneArr = []

  if (dioxygenScrubber.length === 1) break

  for (let j = 0; j < dioxygenScrubber.length; j++) {
    dioxygenScrubber[j].charAt(i) === '1' ? isOneArr.push(dioxygenScrubber[j]) : isZeroArr.push(dioxygenScrubber[j])
  }
  if (isOneArr.length >= isZeroArr.length) {
    dioxygenScrubber = []
    dioxygenScrubber = isZeroArr
  } else {
    dioxygenScrubber = []
    dioxygenScrubber = isOneArr
  }
}

console.log(parseInt(oxygenGen[0], 2) * parseInt(dioxygenScrubber[0], 2));