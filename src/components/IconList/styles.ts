import styled from 'styled-components'

export const IconListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    /* justify-content: center; */
    gap: 1rem;
  }
`
