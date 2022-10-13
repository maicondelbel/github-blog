import { ElementType, ReactNode } from 'react'
import { TitleContainer } from './style'

interface ITitleProps {
  size: 'small' | 'medium' | 'large'
  children: ReactNode
  as?: ElementType
}

export function Title({ size, children, as }: ITitleProps) {
  return (
    <TitleContainer as={as} size={size}>
      {children}
    </TitleContainer>
  )
}
