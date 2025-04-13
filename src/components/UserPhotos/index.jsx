import React from "react";
import { Typography, List, ListItem, ListItemText, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserPhotos() {
    const { userId } = useParams();

    // ✅ Gọi danh sách ảnh đúng cách vì photoOfUserModel là 1 HÀM
    const photos = models.photoOfUserModel(userId); 

    return (
        <div className="userPhotos-container">
            <Typography variant="h6">Photos</Typography>
            {(!photos || photos.length === 0) ? (
                <Typography variant="body1">No photos to display.</Typography>
            ) : (
                photos.map((photo) => (
                    <div key={photo._id} style={{ marginBottom: "2rem" }}>
                        <Typography variant="body1">
                            <strong>Photo uploaded on:</strong>{" "}
                            {new Date(photo.date_time).toLocaleString()}
                        </Typography>

                        {/* dùng đường dẫn ảnh  */}
                        <img
                            src={`/images/${photo.file_name}`}  // phải nằm trong thư mục public/images/
                            alt="user photo"
                            width="100%"
                        />

                        <Typography variant="body1">
                            <strong>Comments:</strong>
                        </Typography>
                        <List>
                            {photo.comments && photo.comments.length > 0 ? (
                                photo.comments.map((comment) => {
                                    const user = models.userModel(comment.user._id); // lọc ra các người comment 
                                    return (
                                        <React.Fragment key={comment._id}>
                                            <ListItem>
                                                <ListItemText
                                                    primary={user
                                                        ? `${user.first_name} ${user.last_name}` // Hiển thị tên người dùng
                                                        : "Acclone" //  
                                                    }
                                                    secondary={`${new Date(comment.date_time).toLocaleString()}: ${comment.comment}`} // Hiển thị comment
                                                />
                                            </ListItem>
                                            <Divider />
                                        </React.Fragment>
                                    );
                                })
                            ) : (
                                <ListItem>
                                    <ListItemText primary="No comments." />
                                </ListItem>
                            )}
                        </List>
                    </div>
                ))
            )}
        </div>
    );
}

export default UserPhotos;
