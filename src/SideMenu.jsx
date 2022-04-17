import { makeStyles, ThemeProvider } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "culomn",
        width: 320,
        backgroundColor: theme.palette.primary.main,
        height: "100%",
        position: "fixed",
        left: 0
    }
}))


const SideMenu = () => {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            k
        </div>
    );
}

export default SideMenu;