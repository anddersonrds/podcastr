import Image from 'next/image'
import { useContext } from 'react'
import { PlayerContext } from 'contexts/PlayerContext'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import PlayerButton from 'components/PlayerButton'

import * as S from './styles'

const Player = () => {
  const { episodeList, currentEpisodeIndex } = useContext(PlayerContext)

  const episode = episodeList[currentEpisodeIndex]

  return (
    <S.Wrapper>
      <S.HeaderPlayer>
        <img src="img/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </S.HeaderPlayer>

      {episode ? (
        <S.CurrentPlayer>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            alt={episode.title}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </S.CurrentPlayer>
      ) : (
        <S.EmptyPlayer>
          <strong>Selecione um podcast para ouvir</strong>
        </S.EmptyPlayer>
      )}

      <S.FooterPlayer empty={!episode}>
        <S.Progress>
          <span>00:00</span>
          <S.Slider>
            {episode ? (
              <Slider
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              />
            ) : (
              <main />
            )}
          </S.Slider>
          <span>00:00</span>
        </S.Progress>

        <S.ButtonsWrapper>
          <PlayerButton preset="shuffle" />
          <PlayerButton preset="previous" />
          <PlayerButton preset="play" />
          <PlayerButton preset="next" />
          <PlayerButton preset="repeat" />
        </S.ButtonsWrapper>
      </S.FooterPlayer>
    </S.Wrapper>
  )
}

export default Player
