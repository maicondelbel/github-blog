import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ApiContextProvider } from './contexts/ApiContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename={`${import.meta.env.VITE_BASE_URL}`}>
        <ApiContextProvider>
          <Router />
        </ApiContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
