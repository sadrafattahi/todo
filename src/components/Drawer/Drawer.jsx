import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    list: {
        '& a': {
            color: theme.palette.text.secondary,
            textDecoration: "none"
        }
    },
    icon: {
        color: "black"
    }

}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer className={classes.drawer}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List className={classes.list}>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/">ToDos</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/create">Create ToDo</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton className={classes.icon} onClick={() => setOpenDrawer(!openDrawer)}>
                <Menu />
            </IconButton>
        </>
    );
}
export default DrawerComponent;