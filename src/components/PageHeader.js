import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  pageHeader: {
    padding: theme.spacing(3),
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  pageIcon: {
    padding: theme.spacing(1),
    display: 'inline-block',
    color: theme.palette.secondary.main
  },
  pageTitle: {
    paddingLeft: theme.spacing(6),
    '& .MuiTypography-subtitle2': {
      fontWeight: '300'
    }
  }
}));
function PageHeader(props) {
  const classes = useStyles();
  const { icon, title, subTitle } = props;
  return (
    <Paper elevation={0} square className={classes.root}>
      <div  className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default PageHeader;
