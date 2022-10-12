import { IconListItemContainer } from './styles'
import { ReactNode } from 'react'

interface IIconListItemProps {
  children: ReactNode
}

export function IconListItem({ children }: IIconListItemProps) {
  return <IconListItemContainer>{children}</IconListItemContainer>
}
