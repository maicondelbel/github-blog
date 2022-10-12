import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;

  figure img {
    height: 9.25rem;
    width: auto;
    border-radius: 8px;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ProfileBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const ProfileHeaderBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BioContainer = styled.p`
  margin-top: 0.5rem;
`
