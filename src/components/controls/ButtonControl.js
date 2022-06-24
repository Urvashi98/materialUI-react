import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none'
    }
}))

function ButtonControl(props) {
  const { text, size, color, variant, onClickHandler, ...other } = props;
  const classes = useStyles();
  return (
    <Button
      size={size || 'large'}
      color={color || 'primary'}
      variant={variant || 'contained'}
      onClick={onClickHandler}
      {...other}
      classes={{root: classes.root, label: classes.label}}
    >
      {text}
    </Button>
  );
}

export default ButtonControl;
