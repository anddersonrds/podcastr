import { createContext } from 'react'

import { Episode } from 'templates/Home'

type PlayerContextData = {
  episodeList: Episode[]
  currentEpisodeIndex: number
  handlePlay: (episode: Episode) => void
}

export const PlayerContext = createContext({} as PlayerContextData)
