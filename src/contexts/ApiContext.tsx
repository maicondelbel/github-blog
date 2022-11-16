/* eslint-disable react-hooks/exhaustive-deps */
import { AxiosError } from 'axios'
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

interface IApiContextType {
  profile: IProfile
  posts: IPosts
  isLoading: boolean
  fetchProfile: () => Promise<void>
  fetchPosts: (query?: string) => Promise<void>
}

interface IApiContextProviderProps {
  children: ReactNode
}

export const ApiContext = createContext({} as IApiContextType)

export function ApiContextProvider({ children }: IApiContextProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [profile, setProfile] = useState({} as IProfile)
  const [posts, setPosts] = useState({
    total: 0,
    items: [],
  } as IPosts)

  const userName = import.meta.env.VITE_GITHUB_USERNAME
  const repository = import.meta.env.VITE_GITHUB_REPOSITORY

  async function fetchProfile() {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${userName}`)

      setProfile(response.data)
    } catch (error) {
      const err = error as AxiosError
      console.log(err.response?.data)
      alert('Erro ao receber os dados do usuário!')
    } finally {
      setIsLoading(false)
    }
  }

  async function fetchPosts(query?: string) {
    try {
      setIsLoading(true)
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
      const err = error as AxiosError
      console.log(err.response?.data)
      alert('Erro ao receber os dados das postagens!')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProfile()
    fetchPosts()
  }, [])

  return (
    <ApiContext.Provider
      value={{ profile, posts, isLoading, fetchProfile, fetchPosts }}
    >
      {children}
    </ApiContext.Provider>
  )
}
