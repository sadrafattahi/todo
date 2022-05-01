import { Link as MuiLink, AppBar, Grid, Toolbar, Typography, useMediaQuery, useTheme, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todos from "../components/ToDosList/Todos";
import Create from '../components/create/Create'
import Edit from '../components/edit/Edit'
import Navbar from "../components/NavBar/NavBar";

const useStyle = makeStyles(theme => ({
  container: {
    '&.MuiContainer-root': {
      [theme.breakpoints.down("xs")]: {
        paddingLeft: 0,
        paddingRight: 0,
      }
    }
  },
  myButton: {
    color: props => props.color
  },
  gridContainer: {
    flexGrow: 1,
    display: "flex"
  }
}))
const Mybutton = ({ children, ...props }) => {
  const { myButton } = useStyle(props)
  return (
    <button className={`${myButton}`}>{children}</button>
  )
}
const App = () => {
  const classes = useStyle()
  const isSmall = useMediaQuery(theme => theme.breakpoints.down("xs"))
  return (
    <Container className={classes.container}>
      <Router>
        <Navbar />
        <Container style={{ "paddingTop": "30px" }}>
          <Route exact path="/" component={Todos} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/create" component={Create} />
        </Container>
      </Router>
    </Container >
  );
}

export default App;
