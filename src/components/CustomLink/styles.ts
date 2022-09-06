import styled, { css } from 'styled-components'

interface ExternalLinkProps {
  variant?: 'iconLeft'
}

export const LinkContainer = styled.a<ExternalLinkProps>`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors['--blue']};
  font-size: ${({ theme }) => theme.textSizes['--components-link']};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 700;
  transition: 0.4s;
  border-bottom: 1px solid transparent;
  height: 19px;
  line-height: 19px;
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors['--blue']};
  }
  ${({ variant }) =>
    variant === 'iconLeft' &&
    css`
      flex-direction: row-reverse;
    `}
`
