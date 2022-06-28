import { makeStyles, Table, TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    table: {
      marginTop: theme.spacing(3),
      '& thead th': {
        fontWeight: '600',
        fontSize: '15px',
        color: 'white',
        backgroundColor: theme.palette.primary.main,
      },
      '& tbody td': {
        fontWeight: '100'
      },
      '& tbody tr:hover': {
        backgroundColor: '#fffbf2',
        cursor: 'pointer'
      }
    }
  }));
  


function useTable(records, headCells) {

 const classes = useStyles();

  const TblContainer = (props) => <Table className={classes.table}>{props.children}</Table>;
  const TblHead = (props) => {
    return (
      <TableHead>
        <TableRow>
            {headCells.map(r => 
                <TableCell key={r.id}>{r.label}</TableCell>
            )}
        </TableRow>
      </TableHead>
    );
  };
  return { TblContainer, TblHead };
}

export default useTable;
