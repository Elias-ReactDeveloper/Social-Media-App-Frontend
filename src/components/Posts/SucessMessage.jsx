import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

const SucessMessage = ({ handleCloseSucessMessage, openSucessMessage }) => {
    
    return ( <Snackbar open={openSucessMessage} autoHideDuration={6000} onClose={handleCloseSucessMessage}>
        <Alert onClose={handleCloseSucessMessage} severity="success" sx={{      width: '100%' }}>
          Post added sucessfuly!
        </Alert>
      </Snackbar> );
}
 
export default SucessMessage;