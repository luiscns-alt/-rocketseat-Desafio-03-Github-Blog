import styled from 'styled-components'

export const SearchInputContainer = styled.form`
  width: 100%;
  margin-top: 7.2rem;
  margin-bottom: 4.8rem;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.2rem;
    h3 {
      font-size: ${({ theme }) => theme.textSizes['--title-S']};
      color: ${({ theme }) => theme.colors['--subtitle']};
    }
    span {
      font-size: ${({ theme }) => theme.textSizes['--text-S']};
      color: ${({ theme }) => theme.colors['--span']};
    }
  }
  input {
    width: 100%;
    padding: 1.2rem 1.6rem;
    border-radius: 6px;
    background: ${({ theme }) => theme.colors['--input']};
    border: 1px solid ${({ theme }) => theme.colors['--border']};
    color: ${({ theme }) => theme.colors['--text']};
    transition: 0.4s;
    &:focus {
      border-color: ${({ theme }) => theme.colors['--blue']};
      outline: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.colors['--label']};
    }
  }
`
