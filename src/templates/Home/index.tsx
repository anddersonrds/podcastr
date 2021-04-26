import { useContext } from 'react'
import { PlayerContext } from 'contexts/PlayerContext'

import SectionPodcastWrapper from 'components/SectionPodcastWrapper'

import * as S from './styles'

export type Episode = {
  id: string
  title: string
  thumbnail: string
  members: string
  duration: number
  durationAsString: string
  publishedAt: string
  url: string
}

export type HomeTemplateProps = {
  lastestEpisodes: Episode[]
  allEpisodes: Episode[]
}

const Home = ({ lastestEpisodes, allEpisodes }: HomeTemplateProps) => {
  const { handlePlay } = useContext(PlayerContext)
  return (
    <S.Wrapper>
      <SectionPodcastWrapper
        primary
        title="Últimos lançamentos"
        episodes={lastestEpisodes}
        onClick={handlePlay}
      />

      <SectionPodcastWrapper
        title="Todos os episódios"
        episodes={allEpisodes}
        onClick={handlePlay}
      />
    </S.Wrapper>
  )
}

export default Home
