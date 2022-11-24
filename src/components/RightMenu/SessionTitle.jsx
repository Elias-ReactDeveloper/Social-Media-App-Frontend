import { Typography } from "@mui/material";

const SessionTitle = ({ children }) => {
    return ( <Typography component="h6" variant="body1" sx={{ fontWeight: "bold"}}>{children}</Typography> );
}
 
export default SessionTitle;