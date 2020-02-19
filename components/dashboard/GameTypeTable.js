import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DFSContext from '../context/context'

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

const GameTypeTable = (props) => {
  const classes = useStyles();
  const { filteredDFSRes } = useContext(DFSContext)
  const [summarizedData, setSummarizedData] = useState(null)

  const summarizeData = (arrayOfObjs, name) => {
    let totalBuyIn = 0
    let totalWinnings = 0
    
    


    arrayOfObjs.forEach(game => {
      totalBuyIn += game.Entry_Fee;
      totalWinnings += game.Winnings_Non_Ticket + game.Winnings_Ticket
    })

    const objectToReturn = {
      description: name,
      buyIn: totalBuyIn,
      winnings: totalWinnings,
      profit: totalWinnings - totalBuyIn,
      roi: (totalWinnings - totalBuyIn) / totalBuyIn

    }
    return objectToReturn

  }

  useEffect(() => {

    if (filteredDFSRes) {
      const singleEntry = filteredDFSRes.filter((game) => {
        return game.Entry.includes('[Single Entry]') 
      })
      // First filteres out single Entry
      const threeEntry = filteredDFSRes.filter((game) => {
        return game.Entry.includes('[3 Entry Max]') 
      })
      // second filters out 3 entry max
      const theRest = filteredDFSRes.filter((game) => {
        return !game.Entry.includes('[3 Entry Max]')  && !game.Entry.includes('[Single Entry]') 
      })
      // last is the remainder

      summarizeData(singleEntry)

      
      setSummarizedData([summarizeData(singleEntry, "Single Entry"), summarizeData(threeEntry, "3 Entry Max"), summarizeData(theRest, "MME")])
    } else {
      setSummarizedData(null)

    }
    
  }, [filteredDFSRes])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className = {classes.tableData}>Entry Limit</TableCell>
            <TableCell align="right" className = {classes.tableData}>Buy Ins</TableCell>
            <TableCell align="right" className = {classes.tableData}>Winnings</TableCell>
            <TableCell align="right" className = {classes.tableData}>Profit</TableCell>
            <TableCell align="right" className = {classes.tableData}>ROI%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {summarizedData && summarizedData.map(row => {
           
              return(
            <TableRow key={row.description + 'sideSummary'}>
              <TableCell component="th" scope="row" className = {classes.tableData}> 
                {row.description}
              </TableCell>
              <TableCell align="right" className = {classes.tableData}>{row.buyIn.toLocaleString(undefined, {minimumFractionDigits:2})}</TableCell>
              <TableCell align="right" className = {classes.tableData}>{row.winnings.toLocaleString(undefined, {minimumFractionDigits:2})}</TableCell>
              <TableCell align="right" className = {classes.tableData}>{row.profit.toLocaleString(undefined, {minimumFractionDigits:2})}</TableCell>
              <TableCell align="right" className = {classes.tableData}>{row.roi.toFixed(2)}</TableCell>
            </TableRow>
              )
})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GameTypeTable