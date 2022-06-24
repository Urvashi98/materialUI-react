import {
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectControl(props) {
  const { label, name, value, onChangeHandler, selectList, error = null} = props;
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl} {...(error && {error: true}) }>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChangeHandler}
        label={label}
        name={name}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {selectList?.map((item, index) => (
          <MenuItem value={item.id} key={item.id}>{item.title}</MenuItem>
        ))}
      </Select>
      {error && <FormHelperText> {error} </FormHelperText>}
    </FormControl>
  );
}
