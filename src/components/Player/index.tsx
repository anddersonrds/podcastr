import PlayerButton from 'components/PlayerButton'
import * as S from './styles'

const Player = () => (
  <S.Wrapper>
    <S.HeaderPlayer>
      <img src="img/playing.svg" alt="Tocando agora" />
      <strong>Tocando agora</strong>
    </S.HeaderPlayer>

    <S.EmptyPlayer>
      <strong>Selecione um podcast para ouvir</strong>
    </S.EmptyPlayer>

    <S.FooterPlayer>
      <S.Progress>
        <span>00:00</span>
        <S.Slider>
          <div />
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

export default Player
