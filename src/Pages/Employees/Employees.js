import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import PeopleAltTwoToneIcon from "@material-ui/icons/PeopleAltTwoTone";
import PageHeader from "../../components/PageHeader";
import {
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import useTable from "../../customHooks/useTable";
import * as EmployeeFunc from "../../services/employeeDataService";
import ButtonControl from "../../components/controls/ButtonControl";
import AddIcon from "@material-ui/icons/Add";
import PopUp from "../../components/PopUp";

const useStyles = makeStyles((theme) => ({
  employeeform: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  toolBar: {
    flexDirection: "row-reverse",
  },
}));

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Employee Email Address" },
  { id: "mobile", label: "Employee Mobile" },
  { id: "department", label: "Employee Department" },
];

function Employees() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [records, setRecords] = useState(EmployeeFunc.getEmployees());
  const { TblContainer, TblHead } = useTable(records, headCells);

  //Add or Edit -> moved from Employee form
  const submitOrEdit = (employee, resetForm) => {
    EmployeeFunc.insertEmployee(employee); // push to localstorage
    resetForm();
    setOpen(!open);
  }

  return (
    <>
      <PageHeader
        icon={<PeopleAltTwoToneIcon fontSize="large" />}
        title="New Employee"
        subTitle="Employee forms"
      />
      <Paper className={classes.employeeform}>
        <Toolbar className={classes.toolBar}>
          <ButtonControl
            color="default"
            text="Add New"
            size="small"
            variant="outlined"
            onClickHandler={() => setOpen(!open)}
            startIcon={<AddIcon />}
          />
        </Toolbar>

        {/* <EmployeeForm /> */}

        <TblContainer>
          <TblHead />
          <TableBody>
            {records.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.departmnentTitle}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
      </Paper>
      <PopUp
        openPopup={open}
        setOpenPopup={() => {
          setOpen(!open);
        }}
        title="Employee Form"
        children={<EmployeeForm 
          submitOrEdit = {submitOrEdit}
        />}
        maxWidth='md'
      />
    </>
  );
}

export default Employees;
