import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, preset }) => css`
    background: transparent;
    border: 0;
    font-size: 0;

    ${preset === 'play' &&
    css`
      width: ${theme.spacings.xxlarge};
      height: ${theme.spacings.xxlarge};
      border-radius: ${theme.spacings.xsmall};
      background: ${theme.colors.purple400};
    `}
  `}
`
