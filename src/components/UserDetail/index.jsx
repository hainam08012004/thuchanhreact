import React from "react";
import { Typography, Link } from "@mui/material";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const { userId } = useParams();
    const user = models.userModel(userId);

    return (
        <div className="userDetail-container">
            <Typography variant="h6">
                {user.first_name} {user.last_name}
            </Typography>
            <Typography variant="body1">
                <strong>Location:</strong> {user.location}
            </Typography>
            <Typography variant="body1">
                <strong>Occupation:</strong> {user.occupation}
            </Typography>
            <Typography variant="body1">
                <strong>Description:</strong> {user.description}
            </Typography>
            <Link href={`/photos/${userId}`} variant="body2" color="primary">
                View Photos
            </Link>
        </div>
    );
}

export default UserDetail;
