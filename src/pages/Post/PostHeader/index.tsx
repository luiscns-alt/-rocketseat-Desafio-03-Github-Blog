import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import { CustomLink } from '../../../components/CustomLink'
import { relativeDateFormatter } from '../../../utils/formatter'
import { IPost } from '../../Home'
import { Loading, PostHeaderContainer } from './styles'

interface IPostHeaderProps {
  postData: IPost
  isLoading: boolean
}

export function PostHeader({ postData, isLoading }: IPostHeaderProps) {
  const navigate = useNavigate()
  const formattedDate = relativeDateFormatter(postData?.created_at)

  function goBack() {
    navigate(-1)
  }

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <>
          <Loading>
            <ClipLoader color="#3294F8" loading={isLoading} size={50} />
          </Loading>
        </>
      ) : (
        <>
          <header>
            <CustomLink
              as="button"
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              variant="iconLeft"
            />
            <CustomLink
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>
          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  )
}
