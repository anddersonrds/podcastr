import styled, { css } from 'styled-components'

import { ButtonProps } from '.'

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, preset, disabled }) => css`
    background: transparent;
    border: 0;
    font-size: 0;

    transition: filter 0.2s;

    &:hover:not(:disabled) {
      filter: brightness(0.6);
    }

    ${(preset === 'play' || preset === 'pause') &&
    css`
      width: ${theme.spacings.xxlarge};
      height: ${theme.spacings.xxlarge};
      border-radius: ${theme.spacings.xsmall};
      background: ${theme.colors.purple400};

      &:hover:not(:disabled) {
        filter: brightness(0.95);
      }
    `}

    ${disabled &&
    css`
      cursor: default;
    `}
  `}
`
