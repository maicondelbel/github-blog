import { distanceToNowConverter } from '../../utils/formatDistanceToNow'
import { Title } from '../Title'
import { PostCardContainer, PostCardHeader } from './styles'
import ReactMarkdown from 'react-markdown'
import rehypeTruncate from 'rehype-truncate'
import stripe from 'remark-strip-html'

interface IPostCardProps {
  title: string
  createdAt: string
  body: string
}

export function PostCard({ title, body, createdAt }: IPostCardProps) {
  return (
    <PostCardContainer>
      <PostCardHeader>
        <Title size="medium">{title}</Title>
        <span>{distanceToNowConverter(createdAt)}</span>
      </PostCardHeader>

      <ReactMarkdown remarkPlugins={[stripe]} rehypePlugins={[rehypeTruncate]}>
        {body}
      </ReactMarkdown>
    </PostCardContainer>
  )
}
