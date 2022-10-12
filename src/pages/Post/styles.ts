import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 54rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
  margin-bottom: 10rem;
`
export const PostWrapper = styled.div`
  box-shadow: 0px 2px 28px rgb(0 0 0 / 20%);
  border-radius: 10px;
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
  margin-bottom: 3rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul,
  ol {
    padding-left: 1.75rem;
  }

  img {
    max-width: 100%;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`
