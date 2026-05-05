import { render } from '@testing-library/react'
import App from '../../App'

test('root wrapper does not have overflow-x-auto or overflow-x-scroll', () => {
  const { container } = render(<App />)
  const root = container.firstChild as HTMLElement
  expect(root.className).not.toMatch(/overflow-x-auto/)
  expect(root.className).not.toMatch(/overflow-x-scroll/)
})
