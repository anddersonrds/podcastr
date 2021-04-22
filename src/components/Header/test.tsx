import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Header from '.'

describe('<Header />', () => {
  it('should render the ...', () => {
    renderWithTheme(<Header />)

    // expect(
    //   screen.getByRole('heading', { name: /Hauhauhaoh/i })
    // ).toBeInTheDocument()

    screen.logTestingPlaygroundURL()
  })
})
