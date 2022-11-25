import { Box, FormControl, FormControlLabel, FormLabel, MenuItem, Modal, RadioGroup, Radio, Select, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import Message from "./Message";

const CreatePost = ({ openAddPost, handleCloseAddPost }) => {
    
    const [visibility, setVisibility] = useState('Public')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [openSucessMessage, setOpenSucessMessage] = useState(false);
    const [openErrorMessage, setOpenErrorMessage] = useState(false);

    const handleCloseErrorMessage = () => {
        setOpenErrorMessage(false)
    }
    
    const handleOpenErrorMessage = () => {
        setOpenErrorMessage(true)
        setTimeout(handleCloseErrorMessage, 3000)
    }

    const handleCloseSucessMessage = () => {
        setOpenSucessMessage(false)
    }
    
    const handleCreatePost = () => {
        if(!title || !description) {
            handleOpenErrorMessage()
            return
        }
        setOpenSucessMessage(true)
        setTimeout(handleCloseSucessMessage, 3000)
    }

    return ( 
        <div>
            <StyledModal
                open={openAddPost}
                onClose={handleCloseAddPost}
            >

                <StyledBox>
                    <TextField
                        label="Title"
                        variant="standard"
                        onChange={(e) => setTitle(e.target.value)}
                        sx={{ width: "100%" }}
                    />
                    <TextField
                        label="Description"
                        onChange={(e) => setDescription(e.target.value)}
                        sx={{ width: "100%" }}
                    />
                    <Select
                        label="Visibility"
                        variant="standard"
                        value={visibility}
                        onChange={(e) => setVisibility(e.target.value)}
                        sx={{ width: "80px" }}
                    >
                        <MenuItem value="Public">Public</MenuItem>
                        <MenuItem value="Private">Private</MenuItem>
                    </Select>
            
                    <Box>
                        <Typography component="h4" variant="body1"
                            sx={{color: "#A1A1A1"}}
                        >Gender</Typography>
                        <RadioGroup
                            defaultValue="female"
                        >
                            <FormControlLabel value="female" control={<Radio sx={{paddingTop: 0}} />} label="Female" />
                            <FormControlLabel value="male" control={<Radio sx={{paddingTop: 0}} />} label="Male" />
                            <FormControlLabel value="other" control={<Radio sx={{paddingTop: 0}} />} label="Other" />
                            <FormControlLabel
                                value="Custom"
                                disabled
                                control={<Radio sx={{paddingTop: 0}} />}
                                label="Custom (Premium)"
                            />
                        </RadioGroup>
                    </Box>
                    <Box>
                        <Button variant="outlined" color="success" onClick={handleCreatePost} sx={{marginRight: "5px"}}>CREATE</Button>
                        <Button variant="outlined" color="error" onClick={handleCloseAddPost}>CANCEL</Button>
                    </Box>
                </StyledBox>

            </StyledModal>

            <Message 
                handleClose={handleCloseSucessMessage} 
                open={openSucessMessage}  
                message="Post added sucessfuly!"
                severity="success"  
            />

            <Message 
                handleClose={handleCloseErrorMessage} 
                open={openErrorMessage}  
                message="Info is missing!"
                severity="error"  
            />
           
        </div>
    );
}
 
export default CreatePost;

const StyledBox = styled(Box)`
    width: 400px;
    height: 450px;
    padding: 15px;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    gap: 20px;

    @media(max-width: 600px) {
        width: 100%;
        height: 100%;
    } 
`

const StyledModal = styled(Modal)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`