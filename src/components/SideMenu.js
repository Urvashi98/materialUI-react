import React from "react";
import {  makeStyles, withStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//     sideMenu: {
//             display: 'flex',
//             flexDirection: 'column',
//             position: 'absolute',
//             left: '0px',
//             width: '320px',
//             height: '100%',
//             backgroundColor: '#253053'
//     }
// })  Option -1 to use with makeStyles

const style = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
};
function SideMenu(props) {
  // const classes = useStyles(); option -1
  const { classes } = props; //option -2
  return <div className={classes.sideMenu}>
    
  </div>;
}

export default withStyles(style)(SideMenu);
//Option 2 to use with "withStyles"
