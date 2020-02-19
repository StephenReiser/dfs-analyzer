import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // minWidth: 350,
    // maxHeight: 300
  },
  tableData: {
      fontSize: 12,
      padding: 6,
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SimpleTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className = {classes.tableData}>Date</TableCell>
            <TableCell align="right" className = {classes.tableData}>Sport</TableCell>
            <TableCell align="right" className = {classes.tableData}>Buy In</TableCell>
            <TableCell align="right" className = {classes.tableData}>Entrants</TableCell>
            <TableCell align="right" className = {classes.tableData}>Winnings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.topWinnings && props.topWinnings.map(row => {
              const date = new Date(row.Contest_Date_EST)
              const newdate= (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

              return(
            <TableRow key={row.Entry_Key + 'sidetable'}>
              <TableCell component="th" scope="row" className = {classes.tableData}> 
                {newdate}
              </TableCell>
              <TableCell align="right" className = {classes.tableData}>{row.Sport}</TableCell>
              <TableCell align="right" className = {classes.tableData}>{row.Entry_Fee.toLocaleString(undefined, {minimumFractionDigits:2})}</TableCell>
              <TableCell align="right" className = {classes.tableData}>{row.Contest_Entries.toLocaleString()}</TableCell>
              <TableCell align="right" className = {classes.tableData}>{row.Winnings_Non_Ticket.toLocaleString(undefined, {minimumFractionDigits:2})}</TableCell>
            </TableRow>
              )
})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}