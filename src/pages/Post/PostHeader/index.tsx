import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { CustomLink } from '../../../components/CustomLink'
import { PostHeaderContainer } from './styles'

export function PostHeader() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      <>
        <header>
          <CustomLink
            as="button"
            onClick={goBack}
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
            text="Voltar"
            variant="iconLeft"
          />
          <CustomLink text="Ver no Github" href={'#'} target="_blank" />
        </header>

        <h1>JavaScript data types and data structures</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            Luis Carlos
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            há 1 dia
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </li>
        </ul>
      </>
    </PostHeaderContainer>
  )
}
