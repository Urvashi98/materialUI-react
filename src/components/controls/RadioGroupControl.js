import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

export default function RadioGroupControl(props) {
  const { label, value, name, onChangeHandler, radioList } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row name={name} value={value} onChange={onChangeHandler}>
        {radioList?.map((item, index) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
