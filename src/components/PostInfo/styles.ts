import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  margin-top: -5.5rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;

  span {
    margin-top: 1.25rem;
  }

  ul {
    margin-top: 0.5rem;
  }
`
export const PostInfoHeaderBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  a {
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
  }
`
