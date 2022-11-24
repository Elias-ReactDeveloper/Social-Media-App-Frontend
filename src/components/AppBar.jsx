import { useState } from 'react';

import { styled as st } from '@mui/material/styles';
import styled from 'styled-components'

import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Typography, TextField, InputAdornment, Box, Badge, IconButton, Menu, MenuItem } from '@mui/material';

const StyledTextField = st(TextField)(({theme}) => ({
    backgroundColor: "#5D6AC1",
    width: "500px",
    borderRadius: "5px",
    color: "#fff",
}))

const StyledSearchIcon = st(SearchIcon)(({theme}) => ({
    color: "#fff"
}))


/* styled components*/ 
const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
`
const Container = styled.div`
    height: 60px; 
    padding: 0 20px; 
    background-color: #3F50B6;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AppBar = () => {
    const [anchorEl, setAnchorEl] = useState(null) 
    
    const isMenuOpen = Boolean(anchorEl)
    
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const renderMenu = (
        <Menu
            anchorEl={anchorEl} 
            open={isMenuOpen}   
            onClose={handleClose}

            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        > 
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    )

    return ( 
        <Container>
            <Typography variant="h6" component="h4">Elias Dev</Typography>

            <StyledTextField 
                placeholder='Search...'
                size="small"
                InputProps={{
                    style: { color: "#fff" },
                    startAdornment: <InputAdornment position="start">
                        <StyledSearchIcon />
                    </InputAdornment>,
                }}
            />

            <Box display="flex" justifyContent="center">
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Img onClick={handleProfileMenuOpen} src='https://avatars.githubusercontent.com/u/81265552?v=4' />
                </IconButton>
               
            </Box>
            
            { renderMenu }

        </Container>    
    )
}

export default AppBar