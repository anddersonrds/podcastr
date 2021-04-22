import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme
} from 'styled-components'

type GlobalStyleProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme, removeBg }) => css`
    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 720px) {
      html {
        font-size: 87.5%;
      }
    }

    body {
      ${!removeBg &&
      css`
        background-color: ${theme.colors.gray50};
      `}
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family};
      font-weight: 500;
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray500};
    }

    h1 {
      font-size: ${theme.font.sizes.xlarge};
    }

    h2 {
      font-size: ${theme.font.sizes.medium};
    }

    button {
      cursor: pointer;
    }
  `};
`

export default GlobalStyles
