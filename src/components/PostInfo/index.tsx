import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { distanceToNowConverter } from '../../utils/formatDistanceToNow'
import { IconList } from '../IconList'
import { IconListItem } from '../IconList/IconListItem'
import { Link } from '../Link'
import { Title } from '../Title'
import { PostInfoContainer, PostInfoHeaderBoxContainer } from './styles'

interface IPostInfoProps {
  title: string
  url: string
  createdAt: string
  comments: number
  user: { login: string }
}

export function PostInfo({
  user,
  comments,
  title,
  url,
  createdAt,
}: IPostInfoProps) {
  return (
    <PostInfoContainer>
      <PostInfoHeaderBoxContainer>
        <NavLink to="../">
          <FontAwesomeIcon icon={faChevronLeft} /> Voltar
        </NavLink>
        <Link href={url} target={'_blank'}>
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      </PostInfoHeaderBoxContainer>
      <Title as={'h2'} size="large">
        {title}
      </Title>
      <IconList>
        <IconListItem>
          <FontAwesomeIcon icon={faGithub} /> {user?.login}
        </IconListItem>
        <IconListItem>
          <FontAwesomeIcon icon={faCalendarDay} />
          {distanceToNowConverter(createdAt)}
        </IconListItem>
        <IconListItem>
          <FontAwesomeIcon icon={faComment} />
          {comments} comentários
        </IconListItem>
      </IconList>
    </PostInfoContainer>
  )
}
