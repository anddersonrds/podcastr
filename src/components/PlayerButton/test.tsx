import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PlayerButton from '.'

describe('<PlayerButton />', () => {
  it('should render the PlayerButton', () => {
    renderWithTheme(<PlayerButton preset="shuffle" />)

    // expect(
    //   screen.getByRole('heading', { name: /Hauhauhaoh/i })
    // ).toBeInTheDocument()

    screen.logTestingPlaygroundURL()
  })
})
