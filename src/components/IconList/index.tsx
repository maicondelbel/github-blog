import { ReactNode } from 'react'
import { IconListContainer } from './styles'

interface IIconListProps {
  children: ReactNode
}

export function IconList({ children }: IIconListProps) {
  return <IconListContainer>{children}</IconListContainer>
}
