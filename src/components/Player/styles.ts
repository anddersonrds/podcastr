import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 26.5rem;
    height: 100vh;
    padding: ${theme.spacings.xlarge} ${theme.spacings.xxlarge};
    color: ${theme.colors.white};
    background: ${theme.colors.purple500};

    strong {
      font-family: ${theme.font.lexend};
      font-weight: ${theme.font.bold};
    }
  `}
`

export const HeaderPlayer = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
  `}
`

export const EmptyPlayer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20rem;
    padding: ${theme.spacings.xxlarge};
    text-align: center;
    border: 1.5px dashed ${theme.colors.purple300};
    border-radius: ${theme.spacings.small};
    background: linear-gradient(
      143.8deg,
      rgba(145, 100, 250, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  `}
`
type FooterProps = {
  empty?: boolean
}

export const FooterPlayer = styled.footer<FooterProps>`
  ${({ empty }) => css`
    align-self: stretch;
    ${!!empty &&
    css`
      opacity: 0.5;
    `}
  `}
`

export const Progress = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    font-size: 0.875rem;

    span {
      display: inline-block;
      width: ${theme.spacings.xxlarge};
      text-align: center;
    }
  `}
`

export const Slider = styled.div`
  ${({ theme }) => css`
    flex: 1;

    > div {
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background: ${theme.colors.purple300};
    }
  `};
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${theme.spacings.large};
    gap: ${theme.spacings.small};
  `};
`
