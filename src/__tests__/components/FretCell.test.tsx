import { render } from '@testing-library/react'
import FretCell from '../../components/Fretboard/FretCell'

test('renders without crashing', () => {
  const { container } = render(<FretCell />)
  expect(container.firstChild).toBeInTheDocument()
})

test('has a right-border Tailwind class', () => {
  const { container } = render(<FretCell />)
  const cell = container.firstChild as HTMLElement
  expect(cell.className).toMatch(/border-r/)
})
