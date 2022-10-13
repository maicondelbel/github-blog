/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FindPostsForm } from '../../components/FindPostsForm'
import { Loader } from '../../components/Loader'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { ApiContext } from '../../contexts/ApiContext'
import { HomeContainer, PostsListsContainer } from './styles'

export function Home() {
  const { posts, fetchPosts, fetchProfile } = useContext(ApiContext)

  useEffect(() => {
    fetchProfile()
    fetchPosts()
  }, [])

  return (
    <HomeContainer>
      <Profile />
      <FindPostsForm />
      <PostsListsContainer>
        {posts?.items.length === 0 && <Loader />}
        {posts?.items &&
          posts?.items.map((post, index) => {
            return (
              <NavLink key={index} to={`post/${post.number}`}>
                <PostCard
                  title={post.title}
                  createdAt={post.created_at}
                  body={post.body}
                />
              </NavLink>
            )
          })}
      </PostsListsContainer>
    </HomeContainer>
  )
}
