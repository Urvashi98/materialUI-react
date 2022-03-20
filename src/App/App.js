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

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

//custom theme (visit thene on website and change appropriate properties)
const theme = createTheme({
  palette: {
    primary: {
      main: "#8d1cff",
      light: "#be7dff",
    },
    secondary: {
      main: "#ff17ae",
      light: "#ff8fd8",
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
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
