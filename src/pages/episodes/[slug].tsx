import { GetStaticPaths, GetStaticProps } from 'next'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { api } from 'services/api'
import { convertDurationToTimeString } from 'utils/convertDurationToTimeString'

import Episode, { EpisodeProps } from 'templates/Episode'

export default function Episodes(props: EpisodeProps) {
  return <Episode {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limite: 2,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const paths = data.map((episode) => {
    return {
      params: {
        slug: episode.id
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params

  const { data } = await api.get(`/episodes/${slug}`)

  const episode = {
    id: data.id,
    title: data.title,
    description: data.description,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', {
      locale: ptBR
    }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    url: data.file.url
  }

  return {
    props: {
      episode
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
