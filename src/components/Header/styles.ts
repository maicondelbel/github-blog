import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  background-image: url(/header-background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%, 50%;
  display: flex;
  justify-content: center;

  svg {
    margin-top: 4rem;
  }
`
