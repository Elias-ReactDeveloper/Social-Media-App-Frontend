import { Typography } from "@mui/material";
import styled from 'styled-components'
import SessionTitle from './SessionTitle'

const Categories = () => {
    return ( <div>
        <SessionTitle>Categories</SessionTitle>
        <CategoriesRow>
            <Typography component="p" variant="body1">Sport</Typography>
            <Typography component="p" variant="body1">Food</Typography>
            <Typography component="p" variant="body1">Music</Typography>
        </CategoriesRow>
        <CategoriesRow>
            <Typography component="p" variant="body1">Movies</Typography>
            <Typography component="p" variant="body1">Science</Typography>
            <Typography component="p" variant="body1">Life</Typography>
        </CategoriesRow>
    </div> );
}
 
export default Categories;

const CategoriesRow = styled.div`
    display: flex;
    gap: 15px;
`