import styled from 'styled-components'

export const InputContainer = styled.input`
  padding: 0.75rem 1rem;
  width: 100%;
  border-radius: 6px;
  margin-top: 0.75rem;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:active {
    border: 1px solid ${(props) => props.theme.blue};
  }
`
