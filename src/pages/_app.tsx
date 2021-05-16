import { useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { PlayerContext } from 'contexts/PlayerContext'
import { ThemeProvider } from 'styled-components'

import GlobalStyles, { Wrapper } from 'styles/global'
import theme from 'styles/theme'

import Header from 'components/Header'
import Player from 'components/Player'
import { Episode } from 'templates/Home'

function App({ Component, pageProps }: AppProps) {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = (episode: Episode): void => {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const HandleSetPlayingState = (state: boolean) => {
    setIsPlaying(state)
  }

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        handlePlay,
        handleTogglePlay,
        HandleSetPlayingState
      }}
    >
      <ThemeProvider theme={theme}>
        <Head>
          <title>Podcastr</title>
          <link rel="shortcut icon" href="img/playing.svg" />
          <link rel="apple-touch-icon" href="img/playing.svg" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="O melhor podcastr para você ouvir"
          />
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
    </PlayerContext.Provider>
  )
}

export default App
