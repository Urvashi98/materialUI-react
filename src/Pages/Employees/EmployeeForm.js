import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import ButtonControl from "../../components/controls/ButtonControl";
import CheckboxControl from "../../components/controls/CheckboxControl";
import DatePickerControl from "../../components/controls/DatePickerControl";
import Input from "../../components/controls/Input";
import RadioGroupControl from "../../components/controls/RadioGroupControl";
import SelectControl from "../../components/controls/SelectControl";
import { Form, useForm } from "../../customHooks/useForm";
import * as EmployeeFunc from "../../services/employeeDataService";
const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  gender: "male",
  deptId: "",
  hireDate: new Date(),
  isPermanent: false,
};

function EmployeeForm({ submitOrEdit, editRecord }) {
  const validate = (fieldValues = formValues) => {
    let temp = { ...errors }; //preserve errors and only update required ones!
    if ("fullName" in fieldValues)
      // temp.fullName = formValues.fullName ? "" : "First Name is required"; FIRST TRY
      temp.fullName = fieldValues.fullName ? "" : "First Name is required"; //used fieldValues because updated form Values are not reflected directly in UI.
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    if ("deptId" in fieldValues)
      temp.deptId =
        fieldValues.deptId.length !== 0 ? "" : "Department is required";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length === 10
          ? ""
          : "Mobile number must be 10 digits";

    //set the errors
    setErrors({
      ...temp,
    });

    // return if valid or not on submit
    return Object.values(temp).every((x) => x === ""); //condition for every property in object
  };

  //extract from customHoook!
  const {
    formValues,
    setFormValues,
    errors,
    setErrors,
    handleChange,
    resetForm,
  } = useForm(initialValues, true, validate);

  useEffect(() => {
    if (editRecord) setFormValues(editRecord);
  }, [editRecord]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      submitOrEdit(formValues, resetForm); // send to parent component
    }
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Grid container>
        <Grid item xs={6}>
          <Input
            variant="outlined"
            label="Full Name"
            name="fullName"
            value={formValues.fullName}
            onChangeHandler={handleChange}
            autocomplete="off"
            error={errors.fullName}
          />
          <Input
            variant="outlined"
            label="Email"
            name="email"
            value={formValues.email}
            onChangeHandler={handleChange}
            error={errors.email}
          />
          <Input
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={formValues.mobile}
            onChangeHandler={handleChange}
            error={errors.mobile}
          />
        </Grid>
        <Grid item xs={6}>
          <RadioGroupControl
            label="Gender"
            name="gender"
            value={formValues.gender}
            onChangeHandler={handleChange}
            radioList={EmployeeFunc.getGenderList()}
          />
          <SelectControl
            name="deptId"
            label="Department"
            value={formValues.deptId}
            onChangeHandler={handleChange}
            selectList={EmployeeFunc.getDepartmentList()}
            error={errors.deptId}
          />
          <DatePickerControl
            name="hireDate"
            value={formValues.hireDate}
            onChangeHandler={handleChange}
            label="Hire Date"
          />
          <CheckboxControl
            name="isPermanent"
            label="Permanent"
            value={formValues?.isPermanent}
            onChangeHandler={handleChange}
          />
        </Grid>
        <Grid item container xs={12}>
          <Grid xs={6}></Grid>
          <Grid xs={6}>
            <ButtonControl type="submit" text="Submit" />
            <ButtonControl
              text="Reset"
              type="reset"
              variant="outlined"
              onClickHandler={resetForm}
            />
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
