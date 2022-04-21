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
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
        '& a': {
            textDecoration: "none",
            color: "white",
            fontSize: "20px",
            marginLeft: theme.spacing(2),
            "&:hover": {
                color: "yellow",
            },
        }
    },
    logo: {
        cursor: "pointer",
        [theme.breakpoints.down("xs")]: {
            flexGrow: "1",
        }
    },
}));

function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isSmall = useMediaQuery(theme.breakpoints.down("xs"))
    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant={isSmall ? "h6" : "h4"} className={classes.logo}>
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