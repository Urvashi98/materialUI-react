import React from "react";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import PowerSettingsNewSharpIcon from "@material-ui/icons/PowerSettingsNewSharp";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
  },
  inputBase: {
    opacity: "0.6px",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      //when hover the element
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      //overriding default style -1 (use EXACT NAME of the class used)
      //when this icon is in InputBAse, following styles will be applied
      /* marginRight: "10px", */

      marginRight: theme.spacing(1), // 8 px

    },
  },
  //option -2 to override
  btnRoot: {
    backgroundColor: "green",
  },
  btnLabel: {
    color: "red",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid
            item
            style={{
              border: "1px solid #fff",
              borderRadius: "5px",
              padding: "2px",
              color: "white !important",
            }}
          >
            <InputBase
              placeholder="search items"
              className={classes.inputBase}
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={8} color="secondary">
                <NotificationsIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={2} color="primary">
                <ChatIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewSharpIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

// eslint-disable-next-line no-lone-blocks
{
  /* 
    //using classes(takes object hence 2 braces{}) in elements

<IconButton
classes={{ root: classes.btnRoot, label: classes.btnLabel }}
>
<Badge badgeContent={8} color="secondary">
  <NotificationsIcon fontSize="small" />
</Badge>
</IconButton> 

*/
}
