import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 21.2rem;
  margin-top: -8.8rem;
  background: ${({theme}) => theme.colors['--profile']};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 3.2rem 4rem;
  display: flex;
  gap: 2rem;
`

export const ProfilePicture = styled.img`
  width: 14.8rem;
  height: 14.8rem;
  border-radius: 8px;
  object-fit: cover;
`

export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    h1 {
      font-size: ${({ theme }) => theme.textSizes['--title-L']};
      color: ${({ theme }) => theme.colors['--title']};
      line-height: 130%;
    }
  }
  ul {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    flex-wrap: wrap;
    margin-top: auto;
    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      svg {
        width: 1.8rem;
        height: 1.8rem;
        color: ${({ theme }) => theme.colors['--label']};
      }
    }
  }
`
