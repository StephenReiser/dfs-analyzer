import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
      // minWidth: 350,
      // maxHeight: 300
    },
    tableData: {
        fontSize: 12,
        padding: 6,
        
    },
    sumLine: {
        fontWeight:"bold"
    }
  });
  


const SideTableRow = (props) => {
    const classes = useStyles();
    return(
        <TableRow key={props.description + 'sidetablerow'} >
              <TableCell component="th" scope="row" className = {`${classes.tableData} ${props.bold ? classes.sumLine : ''}`}> 
                {props.description}
              </TableCell>
              <TableCell align="right" className = {`${classes.tableData} ${props.bold ? classes.sumLine : ''}`}> {props.buyIn.toLocaleString(undefined, {minimumFractionDigits:2})}</TableCell>
              <TableCell align="right" className = {`${classes.tableData} ${props.bold ? classes.sumLine : ''}`}> {props.winnings.toLocaleString(undefined, {minimumFractionDigits:2})}</TableCell>
              <TableCell align="right" className = {`${classes.tableData} ${props.bold ? classes.sumLine : ''}`}> {props.profit.toLocaleString(undefined, {minimumFractionDigits:2})}</TableCell>
              <TableCell align="right" className = {`${classes.tableData} ${props.bold ? classes.sumLine : ''}`}> {props.roi.toFixed(2)}</TableCell>
            </TableRow>
    )
}

export default SideTableRow