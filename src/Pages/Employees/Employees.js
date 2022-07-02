import React, { useEffect, useState } from "react";
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
import { EditOutlined, DeleteOutlineSharp } from "@material-ui/icons";
import ActionButton from "../../components/controls/ActionButton";
import Notification from "../../components/controls/Notification";

const useStyles = makeStyles((theme) => ({
  employeeform: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  toolBar: {
    flexDirection: "row-reverse",
  },
  actionMenu: {
    display: "flex",
    justifyContent: "space-between",
    //margin: "0 1rem",
    cursor: "pointer",
    "& svg:hover": {
      //when hover the element
      backgroundColor: "#f2f2f2",
    },
  },
}));

const notifyInitialState = {
  isOpen: false,
  message: "",
  type: "",
};
const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Employee Email Address" },
  { id: "mobile", label: "Employee Mobile" },
  { id: "department", label: "Employee Department" },
  { id: "actions", label: "Perform Actions" },
];

function Employees() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState(notifyInitialState);
  const [records, setRecords] = useState(EmployeeFunc.getEmployees());
  const [recordForEdit, setrecordForEdit] = useState(null);
  const { TblContainer, TblHead } = useTable(records, headCells);

  //Add or Edit -> moved from Employee form
  const submitOrEdit = (employee, resetForm) => {
    //check if record already exists in the data
    const isExists = records.filter((r) => r.id === employee.id);

    if (isExists.length > 0) {
      EmployeeFunc.updateEmployee(employee);
      setNotify({
        isOpen: true,
        message: "Updated Successfully!",
        type: "success",
      });
    } else {
      //insert it
      EmployeeFunc.insertEmployee(employee); // push to localstorage
      setNotify({
        isOpen: true,
        message: "Added Successfully!",
        type: "success",
      });
    }
    resetForm();
    setOpen(!open);
    setRecords(EmployeeFunc.getEmployees());
  };

  const handleRecordForEdit = (employee) => {
    setrecordForEdit(employee);
    setOpen(true);
  };

  const handleRecordForDelete = (employee) => {
    EmployeeFunc.deleteEmployee(employee);
    setRecords(EmployeeFunc.getEmployees());
    setNotify({
      isOpen: true,
      message: "Deleted Successfully!",
      type: "error",
    });
  };

  useEffect(() => {});
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
            onClickHandler={() => {
              setOpen(!open);
              setrecordForEdit(null); //should set this otherwise may hold older non-updated record
            }}
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
                <TableCell>
                  <div className={classes.actionMenu}>
                    <ActionButton
                      color="primary"
                      onClick={() => handleRecordForEdit(item)}
                    >
                      <EditOutlined />
                    </ActionButton>
                    <ActionButton
                      color="primary"
                      onClick={() => handleRecordForDelete(item)}
                    >
                      <DeleteOutlineSharp />
                    </ActionButton>
                  </div>
                </TableCell>
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
        children={
          <EmployeeForm
            submitOrEdit={submitOrEdit}
            editRecord={recordForEdit}
          />
        }
        maxWidth="md"
      />
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}

export default Employees;
