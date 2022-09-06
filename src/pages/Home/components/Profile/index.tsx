import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CustomLink } from '../../../../components/CustomLink'
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture
        src={'https://avatars.githubusercontent.com/u/82232848?v=4'}
      />
      <ProfileDetails>
        <header>
          <h1>Luis Carlos</h1>

          <CustomLink text={'Github'} href={'#'} target="_blank" />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            lorem
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            lorem
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            lorem
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
