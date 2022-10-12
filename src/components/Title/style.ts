import styled from 'styled-components'

const FONT_SIZE = {
  small: '1.125rem',
  middle: '1.25rem',
  large: '1.5rem',
} as const

interface ITitleContainer {
  size: keyof typeof FONT_SIZE
}

export const TitleContainer = styled.span<ITitleContainer>`
  font-size: ${(props) => FONT_SIZE[props.size]};
  color: ${(props) => props.theme['base-title']};
  font-weight: bold;
  line-height: ${(props) => props.size === 'large' && '1.3'};
`
