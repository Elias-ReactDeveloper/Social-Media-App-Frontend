import { Card, Typography, Box, Button } from "@mui/material";
import styled from "styled-components";

const Post = ({ post }) => {
    const { imageUrl, title, description } = post
    return ( <div>
            <StyledCard>
                <Img src={imageUrl} />
                <Box component="div" p={2}>
                    <Box component="div" sx={{
                        marginBottom: "20px"
                    }}>
                        <Typography variant="h6" component="h3">{ title }</Typography>
                        <Typography variant="body2" component="p">{ description }</Typography>
                    </Box>
                    <Box component="div" sx={{
                        position: "absolute",
                        left: 0,
                        bottom: 0
                    }}>
                        <Button size="small" sx={{ fontSize: "12px"}}>Share</Button>
                        <Button size="small" sx={{ fontSize: "12px"}}>Learn more</Button>
                    </Box>
                </Box>
            </StyledCard>

    </div> );

}

export default Post;

const Img = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`

const StyledCard = styled(Card)`
    width: 100%;
    height: 400px;
    position: relative;
    margin: auto 0;
    margin-bottom: 60px;

    @media(max-width: 900px) {
        height: auto;
    }
`