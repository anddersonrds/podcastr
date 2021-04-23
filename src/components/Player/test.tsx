import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Player from '.'

describe('<Player />', () => {
  it('should render the Player', () => {
    renderWithTheme(<Player />)

    // expect(
    //   screen.getByRole('heading', { name: /Hauhauhaoh/i })
    // ).toBeInTheDocument()

    screen.logTestingPlaygroundURL()
  })
})
