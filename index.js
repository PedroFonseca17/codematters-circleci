function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function untested1(a, b) {
  if( a === 1) {
  return a
  } else {
    return b
  }
}
function untested2(a, b) {
  return a
}
function untested4(a, b) {
  return a
}
function untested5(a, b) {
  return a
}
module.exports = {
  sum,
  sub,
  multiply,
  divide,
  untested1
}