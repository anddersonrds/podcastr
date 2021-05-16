import { createContext } from 'react'

import { Episode } from 'templates/Home'

type PlayerContextData = {
  episodeList: Episode[]
  currentEpisodeIndex: number
  isPlaying: boolean
  handlePlay: (episode: Episode) => void
  handleTogglePlay: () => void
  HandleSetPlayingState: (state: boolean) => void
}

export const PlayerContext = createContext({} as PlayerContextData)
