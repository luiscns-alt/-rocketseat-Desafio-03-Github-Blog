import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps, ReactNode } from 'react'
import { LinkContainer } from './styles'

type ExternalLinkProps = ComponentProps<typeof LinkContainer> & {
  text: string
  icon?: ReactNode
  variant?: 'iconLeft'
}

export function CustomLink({ text, icon, ...rest }: ExternalLinkProps) {
  return (
    <LinkContainer {...rest}>
      {text} {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </LinkContainer>
  )
}
