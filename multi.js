const day = new Date().getDay()

/* if (day === 0) {
  console.log('Sunday')
} else if (day === 1) {
  console.log('Monday')
} else if (day === 2) {
  console.log('Tuesday')
} else if (day === 3) {
  console.log('Wednesday')
} else if (day === 4) {
  console.log('Thursday')
} else if (day === 5) {
  console.log('Friday')
} else if (day === 6) {
  console.log('Saturday')
} else {
  console.log('Invalid Day')
} */

//most developers think this is a bad choice to use when evaluating conditionals

switch (day) {
  case 0:
    console.log('Sunday')
    break
  case 1:
    console.log('Monday')
    break
  case 2:
    console.log('Tuesday')
    break
  case 3:
    console.log('Wednesday')
    break
  case 4:
    console.log('Thursday')
    break
  case 5:
    console.log('Friday')
    break
  case 6:
    console.log('Saturday')
    break
  default:
    console.log('Invalid Day')
    break
}
