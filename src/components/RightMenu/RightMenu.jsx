import OnlineFriends from "./OnlineFriends";
import styled from "styled-components";
import Gallery from "./Gallery";
import Categories from "./Categories";

const RightMenu = () => {
    return ( <Container>
        <OnlineFriends />
        <Gallery />
        <Categories />
    </Container> );
}
 
export default RightMenu;

const Container = styled.div`
    width: 280px;
    position: fixed;
    right: 20px;
    top: 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #737273;

    @media(max-width: 900px) {
        display: none;
    }
`