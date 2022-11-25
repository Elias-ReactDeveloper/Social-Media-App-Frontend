import * as React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import styled from 'styled-components';

export default function AddPostButton({ handleOpenAddPost }) {
  return (
    <Tooltip title="Create a Post">
        <AddCircleIcon sx={{ 
            position: "fixed", 
            right: "20px", 
            bottom: "20px", 
            cursor: "pointer",
            fontSize: "60px",
            color: "#2C3577"
        }} onClick={handleOpenAddPost} />
    </Tooltip>
  );
}
