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
  },
  sumLine: {
    fontWeight: 'bold'
  }
});



const GameTypeTable = (props) => {
  const classes = useStyles();
  
  const [summarizedData, setSummarizedData] = useState(null)

  const summarizeData = (arrayOfObjs, name, boldOption) => {
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
      roi: (totalWinnings - totalBuyIn) / totalBuyIn,
      bold: boldOption

    }
    return objectToReturn

  }

  useEffect(() => {

    if (props.gppData) {
      const singleEntry = props.gppData.filter((game) => {
        return game.Entry.includes('[Single Entry]') 
      })
      // First filteres out single Entry
      const threeEntry = props.gppData.filter((game) => {
        return game.Entry.includes('[3 Entry Max]') 
      })
      // second filters out 3 entry max
      const theRest = props.gppData.filter((game) => {
        return !game.Entry.includes('[3 Entry Max]')  && !game.Entry.includes('[Single Entry]') 
      })
      // last is the remainder

      summarizeData(singleEntry)

      
      setSummarizedData([summarizeData(singleEntry, "Single Entry", false), summarizeData(threeEntry, "3 Entry Max", false), summarizeData(theRest, "MME", false), summarizeData(props.gppData, "Total", true)])
    } else {
      setSummarizedData(null)

    }
    
  }, [props.gppData])

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
              <TableCell component="th" scope="row" className = {`${classes.tableData} ${row.bold ? classes.sumLine : ''}`}>
                {row.description}
              </TableCell>
              <TableCell align="right" className = {`${classes.tableData} ${row.bold ? classes.sumLine : ''}`}> {row.buyIn.toLocaleString(undefined, {minimumFractionDigits:2})}
              </TableCell>
              <TableCell align="right" className = {`${classes.tableData} ${row.bold ? classes.sumLine : ''}`}>
                {row.winnings.toLocaleString(undefined, {minimumFractionDigits:2})}
              </TableCell>
              <TableCell align="right" className = {`${classes.tableData} ${row.bold ? classes.sumLine : ''}`}>
                {row.profit.toLocaleString(undefined, {minimumFractionDigits:2})}
              </TableCell>
              <TableCell align="right" className = {`${classes.tableData} ${row.bold ? classes.sumLine : ''}`}>
                {row.roi.toFixed(2)}
              </TableCell>
            </TableRow>
              )
})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GameTypeTable