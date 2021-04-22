import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    height: 6.5rem;
    padding: ${theme.spacings.medium} ${theme.spacings.xxlarge};
    border-bottom: 1px solid ${theme.colors.gray100};
    background: ${theme.colors.white};

    p {
      margin-left: ${theme.spacings.medium};
      padding: ${theme.spacings.xsmall} 0 ${theme.spacings.xxsmall}
        ${theme.spacings.medium};
      border-left: 1px solid ${theme.colors.gray100};
    }

    span {
      margin-left: auto;
      text-transform: capitalize;
    }
  `}
`
