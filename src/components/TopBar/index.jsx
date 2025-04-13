import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar () {
    const location = useLocation();
    const path = location.pathname.split("/");

    let title = "Photo Sharing App"; // Default title

    if (path[1] === "users" && path.length === 2) {
        title = "User List";
    } else if (path[1] === "users" && path.length === 3) {
        title = `User Details - ${path[2]}`;
    } else if (path[1] === "photos" && path.length === 3) {
        title = `Photos of ${path[2]}`;
    }

    return (
        <AppBar className="topbar-appBar" position="absolute">
            <Toolbar>
                <Typography variant="h6" color="inherit" className="topbar-title">
                    Nguyễn Hải Nam 
                </Typography>
                <Typography variant="h6" color="inherit" className="topbar-subtitle">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
