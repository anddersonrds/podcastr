import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Episode from '.'

describe('<Episode />', () => {
  it('should render the Episode', () => {
    renderWithTheme(<Episode />)

    // expect(
    //   screen.getByRole('heading', { name: /Hauhauhaoh/i })
    // ).toBeInTheDocument()

    screen.logTestingPlaygroundURL()
  })
})
