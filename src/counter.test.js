import { increment, decrement, getCountDisplay } from './counter'

test('increment function', () => {
  expect(increment(0)).toBe(1)
  expect(increment(5)).toBe(6)
})

test('decrement function', () => {
  expect(decrement(0)).toBe(-1)
  expect(decrement(5)).toBe(4)
})

test('getCountDisplay function', () => {
  expect(getCountDisplay(0)).toBe('Счётчик: 0')
  expect(getCountDisplay(5)).toBe('Счётчик: 5')
})
