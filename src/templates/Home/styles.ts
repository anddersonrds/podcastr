import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxlarge};
    height: calc(100vh - 6.5rem);
    overflow-y: scroll;
  `}
`
