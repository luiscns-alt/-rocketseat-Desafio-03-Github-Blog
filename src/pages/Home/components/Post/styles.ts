import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled(Link)`
  width: 100%;
  height: 26rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors['--post']};
  border: 2px solid ${({ theme }) => theme.colors['--post']};
  padding: 3.2rem;
  transition: 0.4s;
  &:hover {
    border-color: ${({ theme }) => theme.colors['--label']};
  }
  div {
    display: flex;
    gap: 1.6rem;
    margin-bottom: 2rem;
    strong {
      flex: 1;
      font-size: ${({ theme }) => theme.textSizes['--title-M']};
      color: ${({ theme }) => theme.colors['--title']};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    span {
      width: max-content;
      font-size: ${({ theme }) => theme.textSizes['--text-S']};
      color: ${({ theme }) => theme.colors['--span']};
    }
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
