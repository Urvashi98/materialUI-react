import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";

export default function CheckboxControl(props) {
  const { label, value, name, onChangeHandler } = props;

  //e.target in changeHandler expects {name, value} but 
  // checkbox has {Name, Checked}

  const convertToNameValue = (name, value) => ({
      target: {
          name, value
      }
  })

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={value}
          onChange={e => onChangeHandler(convertToNameValue(name, e.target.checked))}
          name={name}
        />
      }
      label={label}
    />
  );
}
