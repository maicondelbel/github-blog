import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body, input, textarea, button {
	font-family: 'Nunito', sans-serif;
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.6;
}

body {
	background-color: ${(props) => props.theme['base-background']};
	color: ${(props) => props.theme['base-text']};
	-webkit-font-smoothing: antialiased;
}

p, span {
	color: ${(props) => props.theme['base-text']};
}

:focus {
	outline: 0;
}
`
