import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UserAndPostsContextProvider } from './contexts/UserAndPostsContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserAndPostsContextProvider>
          <Router />
        </UserAndPostsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
