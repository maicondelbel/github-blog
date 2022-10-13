import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route
        path={`${import.meta.env.VITE_BASE_URL}/`}
        element={<DefaultLayout />}
      >
        <Route
          path={`${import.meta.env.VITE_BASE_URL}/`}
          element={<Home />}
        ></Route>
        <Route
          path={`${import.meta.env.VITE_BASE_URL}/post/:slug`}
          element={<Post />}
        ></Route>
      </Route>
    </Routes>
  )
}
