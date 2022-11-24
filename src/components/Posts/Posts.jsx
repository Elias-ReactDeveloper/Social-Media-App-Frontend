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
    width: calc(100% - 580px); /* - right e left menu*/
    margin-left : 260px;
    padding-top: 20px;

    @media(max-width: 900px) {
        width: calc(100% - 80px); /* - responsive left menu*/
        margin-left : 70px;
    }
`
