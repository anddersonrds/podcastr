import styled, { css } from 'styled-components'

type SectionProps = {
  primary?: boolean
}

export const Wrapper = styled.main<SectionProps>`
  ${({ theme }) => css`
    h2 {
      margin-top: ${theme.spacings.xlarge};
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const PodcastCard = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.small};
    list-style: none;

    li {
      display: flex;
      align-items: center;
      position: relative;
      padding: 1.25rem;
      border-radius: ${theme.spacings.small};
      border: 1px solid ${theme.colors.gray100};
      background: ${theme.colors.white};

      img {
        height: 6rem;
        width: 6rem;
        border-radius: ${theme.spacings.xsmall};
      }
    }
  `}
`

export const PodcastDetails = styled.div`
  ${({ theme }) => css`
    flex: 1;
    margin-left: ${theme.spacings.xsmall};

    a {
      display: block;
      font-family: ${theme.font.lexend};
      font-weight: ${theme.font.bold};
      line-height: 1.4rem;
      text-decoration: none;
      color: ${theme.colors.gray800};

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      font-size: 0.875rem;
      margin-top: 0.5rem;
      max-width: 70%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    span {
      display: inline-block;
      font-size: 0.875rem;
      margin-top: 0.5rem;

      &:last-child {
        margin-left: 0.5rem;
        padding-left: 0.5rem;
        position: relative;

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

export const PodcastButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    right: ${theme.spacings.medium};
    bottom: ${theme.spacings.medium};
    width: ${theme.spacings.large};
    height: ${theme.spacings.large};
    font-size: 0;
    border-radius: 0.675rem;
    border: 1px solid ${theme.colors.gray100};
    background: ${theme.colors.white};
    transition: filter ${theme.transition.default};

    &:hover {
      filter: brightness(0.95);
    }

    > img {
      width: ${theme.spacings.small} !important;
      height: ${theme.spacings.small} !important;
    }
  `}
`

export const PodcastTable = styled.table`
  ${({ theme }) => css`
    width: 100%;

    th,
    td {
      padding: 0.75rem ${theme.spacings.xsmall};
      border-bottom: 1px solid ${theme.colors.gray100};
    }

    th {
      color: ${theme.colors.gray200};
      text-transform: uppercase;
      font: ${theme.font.normal} 0.75rem ${theme.font.lexend};
      text-align: left;
    }

    td {
      font-size: 0.875rem;

      img {
        width: ${theme.spacings.large};
        height: ${theme.spacings.large};
        border-radius: 0.5rem;
      }

      a {
        color: ${theme.colors.gray800};
        font-family: ${theme.font.lexend};
        font-weight: ${theme.font.bold};
        text-decoration: none;
        line-height: 1.4rem;
        font-size: ${theme.font.sizes.xsmall};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `}
`

export const TableButton = styled.button`
  ${({ theme }) => css`
    width: ${theme.spacings.medium};
    height: ${theme.spacings.medium};
    font-size: 0;
    border-radius: 0.5rem;
    border: 1px solid ${theme.colors.gray100};
    background: ${theme.colors.white};
    transition: filter ${theme.transition.default};

    &:hover {
      filter: brightness(0.95);
    }

    > img {
      width: 1.25rem !important;
      height: 1.25rem !important;
    }
  `}
`
