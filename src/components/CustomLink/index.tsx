import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps } from 'react'
import { LinkContainer } from './styles'

type ExternalLinkProps = ComponentProps<typeof LinkContainer> & {
  text: string
}

export function CustomLink({ text, ...rest }: ExternalLinkProps) {
  return (
    <LinkContainer {...rest}>
      {text} <FontAwesomeIcon icon={faUpRightFromSquare} />
    </LinkContainer>
  )
}
