import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LoaderContainer } from './styles'

export function Loader() {
  return (
    <LoaderContainer>
      <FontAwesomeIcon icon={faSpinner} spin size="2x" />
    </LoaderContainer>
  )
}
