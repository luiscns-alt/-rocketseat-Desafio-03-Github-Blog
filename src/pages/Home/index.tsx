import { useCallback, useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { api } from '../../lib/axios'
import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { Loading, PostsListContainer } from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20label:published%20repo:${username}/${repoName}`,
        )
        const res = response.data.items
        setPosts(res)
      } finally {
        setIsLoading(false)
      }
    },
    [posts],
  )

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Loading>
          <ClipLoader color="#3294F8" loading={isLoading} size={50} />
        </Loading>
      ) : (
        <PostsListContainer>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </PostsListContainer>
      )}
    </>
  )
}
