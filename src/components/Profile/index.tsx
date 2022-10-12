import {
  BioContainer,
  ProfileHeaderBoxContainer,
  ProfileBoxContainer,
  ProfileContainer,
} from './styles'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Title } from '../Title'
import { Link } from './../Link/index'
import { IconList } from '../IconList'
import { IconListItem } from '../IconList/IconListItem'
import { useContext } from 'react'
import { UserAndPostsContext } from '../../contexts/UserAndPostsContext'

export function Profile() {
  const { profile } = useContext(UserAndPostsContext)

  return (
    <ProfileContainer>
      <figure>
        <img src={profile?.avatar_url} alt="" />
      </figure>
      <ProfileBoxContainer>
        <ProfileHeaderBoxContainer>
          <Title size="large">{profile?.name}</Title>
          <Link href={profile?.html_url} target="_blank">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </ProfileHeaderBoxContainer>

        <BioContainer>{profile?.bio}</BioContainer>

        <IconList>
          <IconListItem>
            <FontAwesomeIcon icon={faGithub} /> {profile?.login}
          </IconListItem>
          {profile?.company !== null && (
            <IconListItem>
              <FontAwesomeIcon icon={faBuilding} />
              {profile?.company}
            </IconListItem>
          )}
          <IconListItem>
            <FontAwesomeIcon icon={faUserGroup} />
            {profile?.followers}
            {profile?.followers > 1 ? ' seguidores' : ' seguidores'}
          </IconListItem>
        </IconList>
      </ProfileBoxContainer>
    </ProfileContainer>
  )
}
