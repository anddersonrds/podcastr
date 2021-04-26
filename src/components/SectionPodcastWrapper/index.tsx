import Image from 'next/image'
import Link from 'next/link'

import { Episode } from 'templates/Home'

import * as S from './styles'

type SectionWrapperProps = {
  title: string
  episodes: Episode[]
  primary?: boolean
  onClick: (episode: Episode) => void
}

const SectionPodcastWrapper = ({
  title,
  episodes,
  primary,
  onClick
}: SectionWrapperProps) => (
  <S.Wrapper primary={primary}>
    <h2>{title}</h2>

    {primary ? (
      <S.PodcastCard>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Image
              width={192}
              height={192}
              src={episode.thumbnail}
              alt={episode.title}
              objectFit="cover"
            />

            <S.PodcastDetails>
              <Link href={`/episodes/${episode.id}`}>
                <a>{episode.title}</a>
              </Link>
              <p>{episode.members}</p>
              <span>{episode.publishedAt}</span>
              <span>{episode.durationAsString}</span>
            </S.PodcastDetails>

            <S.PodcastButton type="button" onClick={() => onClick(episode)}>
              <img src="/img/play-green.svg" alt="Tocar episódio" />
            </S.PodcastButton>
          </li>
        ))}
      </S.PodcastCard>
    ) : (
      <S.PodcastTable cellSpacing={0}>
        <thead>
          <tr>
            <th></th>
            <th>Podcast</th>
            <th>Integrantes</th>
            <th>Data</th>
            <th>Duração</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode) => (
            <tr key={episode.id}>
              <td style={{ width: 72 }}>
                <Image
                  height={120}
                  width={120}
                  src={episode.thumbnail}
                  alt={episode.title}
                  objectFit="cover"
                />
              </td>
              <td>
                <Link href={`/episodes/${episode.id}`}>
                  <a>{episode.title}</a>
                </Link>
              </td>
              <td>{episode.members}</td>
              <td style={{ width: 100 }}>{episode.publishedAt}</td>
              <td>{episode.durationAsString}</td>
              <td>
                <S.TableButton type="button" onClick={() => onClick(episode)}>
                  <img src="/img/play-green.svg" alt="Tocar episódio" />
                </S.TableButton>
              </td>
            </tr>
          ))}
        </tbody>
      </S.PodcastTable>
    )}
  </S.Wrapper>
)

export default SectionPodcastWrapper
