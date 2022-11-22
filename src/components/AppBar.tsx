import { styled } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Container as Ctn, Typography } from '@mui/material';
import { flexbox } from '@mui/system';

const Container = styled(Ctn)(({theme}) => ({
    height: "60px", 
    backgroundColor: "#3F50B6",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1,
    color: "#fff",
    display: "flex",
    alignItems: "center"
}))

const AppBar = () => {
    return ( 
        <Container>
            <Typography variant="h6" component="h4">Elias Dev</Typography>
        </Container>    
    )
}

export default AppBar