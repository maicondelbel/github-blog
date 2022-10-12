import styled from 'styled-components'

export const LinkContainer = styled.a`
  color: ${(props) => props.theme.blue};
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    transition: border-bottom 0.2s;
  }
`
