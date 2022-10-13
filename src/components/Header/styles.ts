import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  background-image: url(header-background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%, 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  svg {
    margin-top: -4.37rem;
  }
`
