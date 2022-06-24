import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DatePickerControl(props) {
  const { name, value, label, onChangeHandler } = props;

  //e.target in changeHandler expects {name, value} but 
  // checkbox has {Name, Checked}

  const convertToNameValue = (name, value) => ({
    target: {
        name, value
    }
})
console.log('convert to date event', convertToNameValue(name, value));
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        name={name}
        label={label}
        value={value}
        onChange={e => onChangeHandler(convertToNameValue(name, e))}
        format='MMM/dd/yyy'
        variant="dialog"
        inputVariant="outlined"
      />
    </MuiPickersUtilsProvider>
  );
}
