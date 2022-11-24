import { List } from "@mui/material";
import ListItem from "./ListItem";

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import TabletMacRoundedIcon from '@mui/icons-material/TabletMacRounded';
import TurnedInRoundedIcon from '@mui/icons-material/TurnedInRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

import styled from "styled-components"

const LeftMenu = () => {
    return ( <Container>
        <List component="nav" aria-label="main mailbox folders">
            <ListItem IconComponent={HomeRoundedIcon} text='Home' />
            <ListItem IconComponent={PersonRoundedIcon} text='Friends' />
            <ListItem IconComponent={FormatListBulletedRoundedIcon} text='Lists' />
            <ListItem IconComponent={CameraAltRoundedIcon} text='Camera' />
            <ListItem IconComponent={PlayCircleOutlineRoundedIcon} text='Videos' />
            <ListItem IconComponent={TabletMacRoundedIcon} text='Apps' />
            <ListItem IconComponent={TurnedInRoundedIcon} text='Collections' />
            <ListItem IconComponent={StorefrontOutlinedIcon} text='Market Place' />
            <ListItem IconComponent={SettingsRoundedIcon} text='Settings' />
            <ListItem IconComponent={ExitToAppRoundedIcon} text='Logout' />
        </List>
    </Container> );
}
 
export default LeftMenu;

const Container = styled.div`
    width: 250px;
    padding-left: 15px;
    border-right: 1px solid #ddd;;
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;

    @media(max-width: 900px) {
        width: 60px;
        padding-left: 0;
    }
`

