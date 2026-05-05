import { render, screen } from '@testing-library/react'
import Fretboard from '../../components/Fretboard/Fretboard'
import { STRING_COUNT } from '../../constants/fretboard'

test('renders exactly STRING_COUNT string rows', () => {
  render(<Fretboard />)
  const checkboxes = screen.getAllByRole('checkbox')
  expect(checkboxes).toHaveLength(STRING_COUNT)
})

test('container has brown background Tailwind class', () => {
  const { container } = render(<Fretboard />)
  const fretboard = container.firstChild as HTMLElement
  expect(fretboard.className).toMatch(/bg-amber-800/)
})

test('all checkboxes are present and checked by default', () => {
  render(<Fretboard />)
  const checkboxes = screen.getAllByRole('checkbox')
  expect(checkboxes).toHaveLength(STRING_COUNT)
  checkboxes.forEach(cb => expect(cb).toBeChecked())
})

test('container has overflow-x-auto class', () => {
  const { container } = render(<Fretboard />)
  const fretboard = container.firstChild as HTMLElement
  expect(fretboard.className).toMatch(/overflow-x-auto/)
})
