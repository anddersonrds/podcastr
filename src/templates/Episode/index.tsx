import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

type Episode = {
  id: string
  title: string
  description: string
  thumbnail: string
  members: string
  duration: number
  durationAsString: string
  publishedAt: string
  url: string
}

export type EpisodeProps = {
  episode: Episode
}

const Episode = ({ episode }: EpisodeProps) => (
  <S.Wrapper>
    <S.Thumbnail>
      <Link href="/">
        <button type="button">
          <img src="/img/arrow-left.svg" alt="Voltar" />
        </button>
      </Link>

      <Image
        width={700}
        height={160}
        src={episode.thumbnail}
        alt={episode.title}
        objectFit="cover"
      />

      <button type="button">
        <img src="/img/play.svg" alt="Tocar Episódio" />
      </button>
    </S.Thumbnail>

    <S.Header>
      <h1>{episode.title}</h1>
      <span>{episode.members}</span>
      <span>{episode.publishedAt}</span>
      <span>{episode.durationAsString}</span>
    </S.Header>

    <S.Description dangerouslySetInnerHTML={{ __html: episode.description }} />
  </S.Wrapper>
)

export default Episode
