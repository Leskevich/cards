import React from 'react';
import {CircularProgress} from "@mui/material";

export const ProgressCircular = () => {
    return (
        <div style={{position: "fixed", top: "30%", textAlign: "center", width: "100%"}}>
            <CircularProgress/>
        </div>
    );
};

