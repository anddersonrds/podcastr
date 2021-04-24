import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyles, { Wrapper } from 'styles/global'
import theme from 'styles/theme'

import Header from 'components/Header'
import Player from 'components/Player'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Podcastr</title>
        <link rel="shortcut icon" href="img/playing.svg" />
        <link rel="apple-touch-icon" href="img/playing.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="O melhor podcastr para você ouvir" />
      </Head>
      <Wrapper>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
        <GlobalStyles />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
