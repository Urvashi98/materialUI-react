import React from "react";
import EmployeeForm from "./EmployeeForm";
import PeopleAltTwoToneIcon from "@material-ui/icons/PeopleAltTwoTone";
import PageHeader from "../../components/PageHeader";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  employeeform: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  }
}));

function Employees() {
    const classes = useStyles();
  return (
    <>
      <PageHeader
        icon={<PeopleAltTwoToneIcon fontSize="large" />}
        title="New Employee"
        subTitle="Employee forms"
      />
      <Paper className={classes.employeeform}>
        <EmployeeForm />
      </Paper>
    </>
  );
}

export default Employees;
