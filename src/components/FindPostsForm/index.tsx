import { useContext } from 'react'
import { InputContainer } from '../Input/styles'
import { Title } from '../Title'
import { FindPostsFormContainer, FindPostsFormHeader } from './styles'
import { useForm } from 'react-hook-form'
import { UserAndPostsContext } from '../../contexts/UserAndPostsContext'

interface ISearchFormInput {
  query: string
}

export function FindPostsForm() {
  const { posts, fetchPosts } = useContext(UserAndPostsContext)
  const { register, handleSubmit } = useForm<ISearchFormInput>()

  async function handleSearchPost(data: ISearchFormInput) {
    await fetchPosts(data.query)
  }

  return (
    <FindPostsFormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <FindPostsFormHeader>
        <Title size="small">Publicações</Title>
        <span>
          {posts?.total > 1
            ? `${posts?.total} publicações`
            : `${posts?.total} publicação`}
        </span>
      </FindPostsFormHeader>
      <InputContainer
        onInput={(e) => !e.currentTarget.value && fetchPosts()}
        {...register('query')}
        type="text"
        placeholder="Buscar conteúdo"
        required
      />
    </FindPostsFormContainer>
  )
}
