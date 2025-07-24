// Boolean Operators - '&&' (and) and '||' (or)
// ex. if (time <= 0 || numberOfLives === 0) { endGame() }

// Short Circuit Evaluation - stopping code execution as soon as possible

//console.log(3 === 3 && 'a' === 'a') //evaluates as true because both statements are true

//console.log(3 === 3 && 'cow') //evaluates as cow because the operands are truthy - a string with a length > 0; cow is last

//console.log(3 === 3 && 'cow' && 'chicken') //evaluates as chicken because all operands are truthy

//console.log(3 === 3 && false && 'chicken') //evaluates as false because one of the operands is false

//3 === 3 && false && console.log('chicken') //because false, statement short circuits. never gets to chicken. see next

//3 === 3 && 'cow' && console.log('chicken') //because all are truthy, logs chicken

//console.log(3 === 3 || 'cow' || 'chicken') //or logs first truthy value, in this case 3 === 3 evaluates as true

//console.log(3 === 4 || 'cow' || 'chicken') //or logs first truthy value, in this case 'cow'

//console.log(3 === 4 || ('cow' && 'chicken')) //logs chicken, same as line 10 above

//console.log(3 === 4 || false || 0) //logs 0 because all are false and 0 is last

/* const isAdult = (age) => {
  if (age && age >= 18) {
    return true
  } else {
    return false
  }
} */

//using short circuiting
const isAdult = (age) => {
  return age && age >= 18
}

//console.log(isAdult(19)) //true
//console.log(isAdult(17)) //false
//console.log(isAdult(18)) //true
//console.log(isAdult()) //undefined

/* const countToFive = (start) => {
  for (let i = start; i <= 5; i++) {
    console.log(i)
  }
} */

//countToFive(0) //0, 1, 2, 3, 4, 5
//countToFive(3) //3, 4, 5
//countToFive(5) //5
//countToFive(6) //nothing, i > 5
//countToFive() //nothing, start, and therfore i, is undefined

/* const countToFive = (start) => {
  //if start is undefined, will evaluate to 1 now, first truthy value
  start = start || 1
  for (let i = start; i <= 5; i++) {
    console.log(i)
  }
} */

//countToFive(2) //2, 3, 4, 5
//countToFive() //1, 2, 3, 4, 5
//countToFive(0) //0 evaluates as falsey, starts at 1
//countToFive(6) //nothing, i > 5

//better way to start with 1 so 0 will be evaluated correctly:
const countToFive = (start = 1) => {
  for (let i = start; i <= 5; i++) {
    console.log(i)
  }
}

countToFive(0) //0, 1, 2, 3, 4, 5

const greet = (name) => {
  name && console.log(`Hi, ${name}!`)
}

greet('Brian') //Hi, Brian!
greet() //Nothing printed because no name is provided, maybe set initial name to 'User'
