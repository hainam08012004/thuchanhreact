import React from "react";
import { List, ListItem, ListItemText, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList () {
    const users = models.userListModel();

    return (
        <div className="userList-container">
            <Typography variant="body1">
                This is the user list, which takes up 3/12 of the window. You might
                choose to use <a href="https://mui.com/components/lists/">Lists</a>{" "}
                and <a href="https://mui.com/components/dividers/">Dividers</a> to
                display your users like so:
            </Typography>
            <List component="nav">
                {users.map((item) => (
                    <React.Fragment key={item._id}>
                        <ListItem button component={Link} to={`/users/${item._id}`}>
                            <ListItemText primary={`${item.first_name} ${item.last_name}`} />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
            <Typography variant="body1">
                The model comes in from models.userListModel()
            </Typography>
        </div>
    );
}

export default UserList;
