import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

//custom form hook- takes initial state for feilds
export function useForm(initialValues, validateOnChange = false, validate) {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    //validate on change
    if(validateOnChange){
      console.log('in validate on change hook', {[name]: value});
      validate({[name]: value}); // pass the 
    }
  };

  const resetForm = () => {
    setFormValues(initialValues);
    setErrors({});
  }
  return {
    formValues,
    errors,
    setErrors,
    setFormValues,
    handleChange,
    resetForm
  };
}
//common style for all forms
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

//custom form
export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;

  return (
    <form className={classes.root} onSubmit={other.onSubmit} {...other}>
      {children}
    </form>
  );
}
