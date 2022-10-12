import styled from 'styled-components'

export const IconListItemContainer = styled.li`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    height: 1.125rem;
    width: 1.125rem;
    color: ${(props) => props.theme['base-label']};
  }
`
