import { makeStyles } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles((theme) => ({
  addNewButton: {
    backgroundColor: "cyan",
    borderRadius: "100%",
    width: "fit-content",
    height:"fit-content",
    position: "fixed",
    right: "40px",
    bottom: "40px",
    padding: "8px"
  },
  plusIcon: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   fontSize: '30px',
//    margin: '10px'
   
  },
}));

function AddNew() {
  const classes = useStyles();

  return (
    <div className={classes.addNewButton}>
      <span className={classes.plusIcon}>+ </span>
    </div>
  );
}

export default AddNew;
