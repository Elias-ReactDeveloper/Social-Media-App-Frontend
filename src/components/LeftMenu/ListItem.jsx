import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import styled from "styled-components";

const ListItem = ({ IconComponent, text }) => {
    return ( 
        <ListItemButton>
            <ListItemIcon>
                <IconComponent />
            </ListItemIcon>
            <StyledListItemText primary={text} />
        </ListItemButton>
     );
}
 
export default ListItem;

const StyledListItemText = styled(ListItemText)`
    @media(max-width: 900px) {
        & {
            display: none;
        }
    }
`