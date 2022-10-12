/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface IProfile {
  avatar_url: string
  bio: string
  company: string
  name: string
  login: string
  html_url: string
  followers: number
}

interface IPostsItems {
  id: number
  number: number
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
  user: {
    login: string
  }
}

interface IPosts {
  total: number
  items: IPostsItems[]
}

interface IUserAndPostsContextType {
  profile: IProfile
  posts: IPosts
  fetchProfile: () => Promise<void>
  fetchPosts: (query?: string) => Promise<void>
}

interface IUserAndPostsContextProviderProps {
  children: ReactNode
}

export const UserAndPostsContext = createContext({} as IUserAndPostsContextType)

export function UserAndPostsContextProvider({
  children,
}: IUserAndPostsContextProviderProps) {
  const [profile, setProfile] = useState({} as IProfile)
  const [posts, setPosts] = useState({
    total: 0,
    items: [],
  } as IPosts)

  const userName = import.meta.env.VITE_GITHUB_USERNAME
  const repository = import.meta.env.VITE_GITHUB_REPOSITORY

  async function fetchProfile() {
    try {
      const response = await api.get(`/users/${userName}`)

      setProfile(response.data)
    } catch (error) {
      alert('Erro ao receber os dados do usuário!')
    }
  }

  async function fetchPosts(query?: string) {
    try {
      const response = await api.get(
        `search/issues?q=${query || ' '}%20repo:${userName}/${repository}`,
      )

      setPosts((state) => {
        return {
          ...state,
          total: response.data.total_count,
          items: response.data.items,
        }
      })
    } catch (error) {
      alert('Erro ao receber os dados das postagens!')
    }
  }

  useEffect(() => {
    fetchProfile()
    fetchPosts()
  }, [])

  return (
    <UserAndPostsContext.Provider
      value={{ profile, posts, fetchProfile, fetchPosts }}
    >
      {children}
    </UserAndPostsContext.Provider>
  )
}
