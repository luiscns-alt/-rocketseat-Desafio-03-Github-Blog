import { SearchInputContainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type TSearchFormInput = z.infer<typeof searchFormSchema>

interface ISearchInputProps {
  postsLength: number
  getPosts: (query?: string) => Promise<void>
}

export function SearchInput({ postsLength, getPosts }: ISearchInputProps) {
  const { register, handleSubmit } = useForm<TSearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: TSearchFormInput) {
    await getPosts(data.query)
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>
        <span>{postsLength} publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchInputContainer>
  )
}
