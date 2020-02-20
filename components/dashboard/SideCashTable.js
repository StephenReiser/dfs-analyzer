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
import SideCashTableRow from './SideCashTableRow'

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



const GameTypeTable = (props) => {
  const classes = useStyles();
  const [myTotal, setMyTotal] = useState({
      buyIn: 0,
      profit: 0,
      winnings: 0,
      roi: 0
  })
  

  useEffect(() => {
      if (props.h2h || props.doubleUp || props.fiftyfifty) {
          const myBuyIn = props.h2h.buyIn + props.doubleUp.buyIn + props.fiftyfifty.buyIn
          const myWinnings = props.h2h.winnings + props.doubleUp.winnings + props.fiftyfifty.winnings
          const myProfit = props.h2h.profit + props.doubleUp.profit + props.fiftyfifty.profit
          const myROI = (props.h2h.profit + props.doubleUp.profit + props.fiftyfifty.profit) / (props.h2h.buyIn + props.doubleUp.buyIn + props.fiftyfifty.buyIn)

          setMyTotal({ 
            buyIn: myBuyIn,
            profit: myProfit,
            winnings: myWinnings,
            roi: myROI
        })

      } else {
          setMyTotal({ 
            buyIn: 0,
            profit: 0,
            winnings: 0,
            roi: 0})
      }

    
    
  }, [props.h2h, props.doubleUp, props.fiftyfifty])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className = {classes.tableData}>Game Type</TableCell>
            <TableCell align="right" className = {classes.tableData}>Buy Ins</TableCell>
            <TableCell align="right" className = {classes.tableData}>Winnings</TableCell>
            <TableCell align="right" className = {classes.tableData}>Profit</TableCell>
            <TableCell align="right" className = {classes.tableData}>ROI%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <SideCashTableRow description = {props.h2h.description} buyIn = {props.h2h.buyIn} winnings = {props.h2h.winnings} profit = {props.h2h.profit} roi = {props.h2h.roi || 0}/>
            <SideCashTableRow description = {props.doubleUp.description} buyIn = {props.doubleUp.buyIn} winnings = {props.doubleUp.winnings} profit = {props.doubleUp.profit} roi = {props.doubleUp.roi || 0}/>
            <SideCashTableRow description = {props.fiftyfifty.description} buyIn = {props.fiftyfifty.buyIn} winnings = {props.fiftyfifty.winnings} profit = {props.fiftyfifty.profit} roi = {props.fiftyfifty.roi || 0}/>
            <SideCashTableRow description = {`Total`} buyIn = {myTotal.buyIn} winnings = {myTotal.winnings} profit = {myTotal.profit} roi = {myTotal.roi} bold={true}/>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GameTypeTable