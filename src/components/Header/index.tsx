import { Logo } from '../Logo'
import { Title } from '../Title'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Title size="small" as={'h1'}>
        GitHub Blog
      </Title>
    </HeaderContainer>
  )
}
