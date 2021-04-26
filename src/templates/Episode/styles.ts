import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: 45rem;
    padding: ${theme.spacings.xlarge} ${theme.spacings.medium};
    margin: 0 auto;
  `}
`

export const Thumbnail = styled.div`
  ${({ theme }) => css`
    position: relative;

    img {
      border-radius: ${theme.spacings.xsmall};
    }

    button {
      position: absolute;
      width: ${theme.spacings.xlarge};
      height: ${theme.spacings.xlarge};
      border-radius: 0.75rem;
      border: 0;
      font-size: 0;
      z-index: ${theme.layers.menu};
      transition: filter ${theme.transition.default};

      &:first-child {
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
        background: ${theme.colors.purple500};
      }

      &:last-child {
        right: 0;
        top: 50%;
        transform: translate(50%, -50%);
        background: ${theme.colors.green500};
      }

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`

export const Header = styled.main`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.gray100};

    h1 {
      margin-top: ${theme.spacings.medium};
      margin-bottom: ${theme.spacings.small};
    }

    span {
      display: inline-block;
      font-size: 0.875rem;

      & + span {
        position: relative;
        margin-left: ${theme.spacings.xsmall};
        padding-left: ${theme.spacings.xsmall};

        &::before {
          position: absolute;
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 2px;
          left: 0;
          top: 50%;
          transform: translate(-50%, -50%);
          background: #ddd;
        }
      }
    }
  `}
`

export const Description = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    line-height: 1.675rem;
    color: ${theme.colors.gray800};

    p {
      margin: ${theme.spacings.small} 0;
    }
  `}
`
