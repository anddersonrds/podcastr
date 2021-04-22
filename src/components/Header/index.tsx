import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import * as S from './styles'

const Header = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR })

  return (
    <S.Wrapper>
      <img src="img/logo.svg" alt="podecstr logo" />
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </S.Wrapper>
  )
}

export default Header
