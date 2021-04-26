import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SectionPodcastWrapper from '.'

describe('<SectionPodcastWrapper />', () => {
  it('should render the SectionPodcastWrapper', () => {
    renderWithTheme(<SectionPodcastWrapper />)

    // expect(
    //   screen.getByRole('heading', { name: /Hauhauhaoh/i })
    // ).toBeInTheDocument()

    screen.logTestingPlaygroundURL()
  })
})
