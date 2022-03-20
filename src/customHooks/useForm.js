import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

//custom form - takes initial state for feilds
export function useForm(initialValues) {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return {
    formValues,
    setFormValues,
    handleChange,
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

  return <form className={classes.root}>{props.children}</form>;
}
