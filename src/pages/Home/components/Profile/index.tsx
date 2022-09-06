import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { CustomLink } from '../../../../components/CustomLink'
import { api } from '../../../../lib/axios'
import {
  Loading,
  ProfileContainer,
  ProfileDetails,
  ProfilePicture,
} from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME

interface IProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

export function Profile() {
  const [profileData, setProfileData] = useState<IProfileData>(
    {} as IProfileData,
  )
  const [isLoading, setIsLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)
      const res = response.data
      setProfileData(res)
    } finally {
      setIsLoading(false)
    }
  }, [profileData])

  useEffect(() => {
    getProfileData()
      .then((r) => {
        console.log('Success')
        return r
      })
      .catch((e) => {
        console.log('Error')
        return e
      })
  }, [])

  return (
    <ProfileContainer>
      {isLoading ? (
        <Loading>
          <ClipLoader color="#3294F8" loading={isLoading} size={50} />
        </Loading>
      ) : (
        <>
          <ProfilePicture
            src={'https://avatars.githubusercontent.com/u/82232848?v=4'}
          />
          <ProfileDetails>
            <header>
              <h1>{profileData.name}</h1>

              <CustomLink
                text={'Github'}
                href={profileData.html_url}
                target="_blank"
              />
            </header>
            <p>{profileData.bio}</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profileData.login}
              </li>
              {profileData?.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  {profileData.company}
                </li>
              )}
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profileData.followers} seguidores
              </li>
            </ul>
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  )
}
