import styled from 'styled-components'

export const PostCardContainer = styled.article`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  flex: 0 0 50%;
  max-width: calc(50% - 1rem);
  border: 2px solid transparent;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  p {
    margin-top: 1.25rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    transition: border 0.2s;
  }
`
export const PostCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h1:first-child {
    flex: 1;
  }
`
