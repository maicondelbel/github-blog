import { useParams } from 'react-router-dom'
import { PostContainer, PostContent, PostWrapper } from './styles'
import { PostInfo } from '../../components/PostInfo'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useContext } from 'react'
import { ApiContext } from '../../contexts/ApiContext'

export function Post() {
  const { slug } = useParams<{ slug: string }>()
  const { posts } = useContext(ApiContext)

  const currentPost = posts.items.find((post) => post.number === Number(slug))

  return (
    <PostContainer>
      <PostWrapper>
        {currentPost && (
          <>
            <PostInfo
              {...currentPost}
              createdAt={currentPost?.created_at}
              url={currentPost?.html_url}
            />
            <PostContent>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {currentPost?.body}
              </ReactMarkdown>
            </PostContent>
          </>
        )}
      </PostWrapper>
    </PostContainer>
  )
}
