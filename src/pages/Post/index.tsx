import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { IPost } from '../Home'
import { PostContent } from './PostContent'
import { PostHeader } from './PostHeader'

// const username = import.meta.env.VITE_GITHUB_USERNAME
// const repoName = import.meta.env.VITE_GITHUB_REPONAME
const username = 'luiscns-alt'
const repoName = 'rocketseat-Desafio-03-Github-Blog'

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )
      const res = response.data
      setPostData(res)
    } finally {
      setIsLoading(false)
    }
  }, [postData])

  useEffect(() => {
    getPostDetails()
      .then((r) => {
        return r
      })
      .catch((e) => {
        console.log('Error')
        return e
      })
  }, [])

  return (
    <>
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </>
  )
}
