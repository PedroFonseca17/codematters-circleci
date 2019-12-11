const {sum, sub, multiply, divide} = require('./index')

test('Adds 1+2 and expects 3', () => {
  expect(sum(1,2)).toBe(3)
})

test('Subtracts 2-1 and returns 1', () => {
  expect(sub(2, 1)).toBe(1)
})

test('Multiply 2 and 2 a return 4', () => {
  expect(multiply(2, 2)).toBe(4)
})

test('divides 4 per 2 and returns 2', () => {
  expect(divide(4, 2)).toBe(2)
  //comment
})