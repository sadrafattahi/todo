import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
    Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "../Drawer/Drawer";

const useStyles = makeStyles((theme) => ({
    AppBar: {
        backgroundColor: "#eeeeee"
    },
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
        '& a': {
            textDecoration: "none",
            fontSize: "18px",
            color: "#212121",
            marginLeft: theme.spacing(2),
            "&:hover": {
                color: "#757575",
            },
        }
    },
    logo: {
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
            flexGrow: "1",
        }
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isSmall = useMediaQuery(theme.breakpoints.down("xs"))
    return (
        <AppBar color="transparent" elevation={0} position="static" className={classes.AppBar}>
            <Toolbar>
                <Typography variant={isSmall ? "h7" : "h6"} className={classes.logo}>
                    MERN-Stack ToDo App
                </Typography>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
                        <Link exact to="/">
                            ToDos
                        </Link>
                        <Link exact to="/create" >
                            Create Todo
                        </Link>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;