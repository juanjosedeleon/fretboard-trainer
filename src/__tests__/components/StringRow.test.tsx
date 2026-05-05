import { render, screen } from '@testing-library/react'
import StringRow from '../../components/Fretboard/StringRow'
import { FRET_COUNT } from '../../constants/fretboard'

test('renders exactly FRET_COUNT fret cells', () => {
  const { container } = render(<StringRow stringIndex={0} />)
  // FretCell renders a div with border-r class
  const fretCells = container.querySelectorAll('.border-r')
  expect(fretCells).toHaveLength(FRET_COUNT)
})

test('renders exactly one checkbox', () => {
  render(<StringRow stringIndex={0} />)
  const checkboxes = screen.getAllByRole('checkbox')
  expect(checkboxes).toHaveLength(1)
})

test('checkbox is checked by default', () => {
  render(<StringRow stringIndex={0} />)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).toBeChecked()
})

test('checkbox has accessible label containing the string index', () => {
  render(<StringRow stringIndex={3} />)
  const checkbox = screen.getByRole('checkbox', { name: /3/i })
  expect(checkbox).toBeInTheDocument()
})
