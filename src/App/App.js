import "./App.css";
import SideMenu from "../components/SideMenu";
import {
  createTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "../components/Header";
import Employees from "../Pages/Employees/Employees";
import AddNew from "../components/AddNew";


const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
    position: 'relative'
  },
});

//custom theme (visit thene on website and change appropriate properties)
const theme = createTheme({
  palette: {
    primary: {
      main: "#8d1cff",
      light: "#e3cafc",
    },
    secondary: {
      main: "#ff17ae",
      light: "#facdea",
    },
    background: {
      default: "#e3f5ff",
    },
  },
  overrides: {
    //override the default styles of the MUI components under this
    MuiAppBar: {
      //get the comp. name from its API documentation
      root: {
        //Go to CSS and override anything you wish
        transform: "translateZ(0)",
      },
    },
  },
  //you can also override PROPS as we did CSS above
});
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
        <AddNew /> 
        {/* add new is just a time pass */}
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
