import styled from 'styled-components'

export const PostHeaderContainer = styled.section`
  width: 100%;
  min-height: 16.8rem;
  margin-top: -8.8rem;
  background: ${({ theme }) => theme.colors['--profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: ${({ theme }) => theme.textSizes['--title-L']};
    color: ${({ theme }) => theme.colors['--title']};
    line-height: 130%;
    margin-bottom: 0.8rem;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 3.2rem;
    flex-wrap: wrap;
    li {
      gap: 0.8rem;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors['--span']};
      line-height: 0;
      svg {
        color: ${({ theme }) => theme.colors['--label']};
      }
    }
  }
`
