import { STRING_COUNT, FRET_COUNT } from '../../constants/fretboard'

test('STRING_COUNT is 6', () => {
  expect(STRING_COUNT).toBe(6)
})

test('FRET_COUNT is 12', () => {
  expect(FRET_COUNT).toBe(12)
})

test('Array.from({ length: STRING_COUNT }) produces a 6-element array', () => {
  const arr = Array.from({ length: STRING_COUNT })
  expect(arr).toHaveLength(6)
})
