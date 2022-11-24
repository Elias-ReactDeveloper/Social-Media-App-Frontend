import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const ListItem = ({ IconComponent, text }) => {
    return ( 
        <ListItemButton>
            <ListItemIcon>
                <IconComponent />
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItemButton>
     );
}
 
export default ListItem;