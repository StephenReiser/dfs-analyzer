import React, {useContext,useEffect, useState} from 'react';
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


const FinishPosition = (props) => {
  const classes = useStyles();
  const { filteredDFSRes } = useContext(DFSContext)
  const [gpp, setGpp] = useState(null)
  const [finishPosition, setFinishPosition] = useState({
      games: 0,
      topPointOne: 0,
      topOnePerc: 0,
      topFivePerc: 0,
      topTenPerc: 0,
      topTwentyPerc: 0,
      cashRate: 0
  })

  useEffect(() => {
    if (filteredDFSRes) {

        const gpp = filteredDFSRes.filter((game) => {
            return !(game.Entry.includes('50/50') && !game.Entry.includes('Max')) && !game.Entry.includes('50-50') && !game.Entry.includes('Double Up')
    
          })
    
          // Annoyingly... I'm still off 1 here
    
          const filteredGPP = gpp.filter((game) => {
            return game.Contest_Entries !== 2
            
          })
          let myGames = filteredGPP.length;
          let topPointOne = 0;
          let topOnePerc = 0;
          let topFivePerc = 0;
          let topTenPerc = 0;
          let topTwentyPerc = 0;
          let cashes = 0;
          for (let i = 0; i < filteredGPP.length; i ++) {
              if (filteredGPP[i].Cashed) {
                  cashes += 1
              }

              if (filteredGPP[i].FinishPerc <= .001) {
                topPointOne += 1
            }
              if (filteredGPP[i].FinishPerc <= .01) {
                  topOnePerc += 1
              }
              if (filteredGPP[i].FinishPerc <= .05) {
                topFivePerc += 1
            }
            if (filteredGPP[i].FinishPerc <= .1) {
                topTenPerc += 1
            }
            if (filteredGPP[i].FinishPerc <= .2) {
                topTwentyPerc += 1
            }

          }
          const mySummary = {
            games: myGames,
            topPointOne: (Math.round(topPointOne/myGames*10000)/100).toFixed(2),
            topOnePerc: (Math.round(topOnePerc/myGames*10000)/100).toFixed(2),
            topFivePerc: (Math.round(topFivePerc/myGames*10000)/100).toFixed(2),
            topTenPerc: (Math.round(topTenPerc/myGames*10000)/100).toFixed(2),
            topTwentyPerc: (Math.round(topTwentyPerc/myGames*10000)/100).toFixed(2),
            cashRate: (Math.round(cashes/myGames*10000)/100).toFixed(2)
        }

        //   console.log('side table', mySummary)
          setFinishPosition(mySummary)
        setGpp(filteredGPP)
    }
  }, [filteredDFSRes])

console.log(props)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className = {classes.tableData}></TableCell>
            <TableCell align="right" className = {classes.tableData}>Perc of Finish</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key = 'totalGames'>
                <TableCell component="th" scope="row" className = {classes.tableData}> 
                    Total Games
                </TableCell>
                <TableCell align="right" className = {classes.tableData}>{finishPosition.games}</TableCell>
            </TableRow>
            <TableRow key = 'cashRate'>
                <TableCell component="th" scope="row" className = {classes.tableData}> 
                    Cash Rate
                </TableCell>
                <TableCell align="right" className = {classes.tableData}>{finishPosition.cashRate}</TableCell>
            </TableRow>
            <TableRow key = 'ptOne'>
                <TableCell component="th" scope="row" className = {classes.tableData}> 
                    Top .01%
                </TableCell>
                <TableCell align="right" className = {classes.tableData}>{finishPosition.topPointOne}</TableCell>
            </TableRow>
            <TableRow key = 'onePerc'>
                <TableCell component="th" scope="row" className = {classes.tableData}> 
                    Top 1%
                </TableCell>
                <TableCell align="right" className = {classes.tableData}>{finishPosition.topOnePerc}</TableCell>
            </TableRow>
            <TableRow key = 'fivePerc'>
                <TableCell component="th" scope="row" className = {classes.tableData}> 
                    Top 5%
                </TableCell>
                <TableCell align="right" className = {classes.tableData}>{finishPosition.topFivePerc}</TableCell>
            </TableRow>
            <TableRow key = 'tenPerc'>
                <TableCell component="th" scope="row" className = {classes.tableData}> 
                    Top 10%
                </TableCell>
                <TableCell align="right" className = {classes.tableData}>{finishPosition.topTenPerc}</TableCell>
            </TableRow>
            <TableRow key = 'twentyPerc'>
                <TableCell component="th" scope="row" className = {classes.tableData}> 
                    Top 20%
                </TableCell>
                <TableCell align="right" className = {classes.tableData}>{finishPosition.topTwentyPerc}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default FinishPosition