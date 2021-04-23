import * as S from './styles'

export type ButtonProps = {
  preset: 'shuffle' | 'previous' | 'play' | 'next' | 'repeat'
}

const PlayerButton = ({ preset }: ButtonProps) => {
  const typeButton = {
    shuffle: {
      path: 'img/shuffle.svg',
      alt: 'Embaralhar'
    },
    previous: {
      path: 'img/previous.svg',
      alt: 'Tocar anterior'
    },
    play: {
      path: 'img/play.svg',
      alt: 'Tocar'
    },
    next: {
      path: 'img/next.svg',
      alt: 'Tocar próxima'
    },
    repeat: {
      path: 'img/repeat.svg',
      alt: 'Repetir'
    }
  }

  return (
    <S.Wrapper type="button" preset={preset}>
      <img src={typeButton[preset].path} alt={typeButton[preset].alt} />
    </S.Wrapper>
  )
}

export default PlayerButton
