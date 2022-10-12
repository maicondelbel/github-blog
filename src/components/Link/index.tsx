import { AnchorHTMLAttributes, ReactNode } from 'react'
import { LinkContainer } from './styles'

interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export function Link({ children, ...props }: ILinkProps) {
  return <LinkContainer {...props}>{children}</LinkContainer>
}
