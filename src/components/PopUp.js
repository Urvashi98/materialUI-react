import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ActionButton from "./controls/ActionButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    flexGrow: "1",
    paddingTop: "0.6rem"
  },
}));

function PopUp({ title, children, openPopup, setOpenPopup, maxWidth }) {
  const classes = useStyles();
  return (
    <Dialog open={openPopup} onClose={setOpenPopup} maxWidth={maxWidth || "sm"}>
      <DialogTitle >
        <div style={{display: 'flex'}}>
          <Typography variant="h6" component="div" className={classes.dialogTitle}>
            {title}
          </Typography>
          {/* <ButtonControl text="X" color="secondary" size="small" onClick={setOpenPopup}/> */}
          <ActionButton color="secondary" onClick={setOpenPopup}>
            <CloseIcon />
          </ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default PopUp;
