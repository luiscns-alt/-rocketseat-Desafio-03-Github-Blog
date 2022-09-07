import styled from 'styled-components'

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 4rem 3.2rem;
  margin-bottom: 12.8rem;
  img {
    width: 100%;
  }
  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors['--blue']};
  }
  ul {
    list-style: inherit;
    padding-left: 2.4rem;
  }
  pre {
    background: ${({ theme }) => theme.colors['--post']};
    padding: 1.6rem;
    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
