import { Typography } from "@mui/material";
import OnlineFriends from "./OnlineFriends";
import styled from "styled-components";

const RightMenu = () => {


    return ( <Container>
        <OnlineFriends />
    </Container> );
}
 
export default RightMenu;

const Container = styled.div`
    widht: 500px;
    background-color: red;
    position: fixed;
    right: 20px;
    top: 80px;
`