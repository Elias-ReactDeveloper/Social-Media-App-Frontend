import styled from "styled-components"
import Post from './Post'

const Posts = () => {
    return ( <Container>
        <Post />
        <Post />
        <Post />
      </Container> 
    );
}
 
export default Posts;

const Container = styled.div`
  width: 700px;
  margin-left : 250px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
