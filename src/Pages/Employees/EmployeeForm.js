import { Grid } from "@material-ui/core";
import React from "react";
import Input from "../../components/controls/Input";
import RadioGroupControl from "../../components/controls/RadioGroupControl";
import SelectControl from "../../components/controls/SelectControl";
import { Form, useForm } from "../../customHooks/useForm";
import * as employeeService from "../../services/employeeDataService";
const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  city: "",
  gender: "male",
  deptId: "",
  hireDate: new Date(),
  isPermanent: false,
};


function EmployeeForm() {
  const { formValues, handleChange } = useForm(initialValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input
            variant="outlined"
            label="Full Name"
            name="fullName"
            value={formValues.fullName}
            onChangeHandler={handleChange}
            autocomplete="off"
          />
          <Input
            variant="outlined"
            label="Email"
            name="email"
            value={formValues.email}
            onChangeHandler={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <RadioGroupControl
            label="Gender"
            value={formValues.gender}
            onChangeHandler={handleChange}
            radioList={employeeService.getGenderList()}
          />
          <SelectControl
            name="deptId"
            label="Department"
            value={formValues.deptId}
            onChangeHandler={handleChange}
            selectList={employeeService.getDepartmentList()}
          />
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
