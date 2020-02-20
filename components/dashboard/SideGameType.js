import React, { useEffect, useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SideGppTable from './SideGppTable'
import SideCashTable from './SideCashTable'
import DFSContext from '../context/context'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height:'100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  table: {
      fontSize: 8
  }
});

const SideGameType = () => {

  const { filteredDFSRes } = useContext(DFSContext)
  const [h2h, setH2h] = useState({
    buyIn: 0,
    winnings: 0,
    profit: 0,
    roi: 0
  })
  const [doubleUp, setDoubleUp] = useState({
    buyIn: 0,
    winnings: 0,
    profit: 0,
    roi: 0
  })
  const [fiftyfifty, setFiftyFifth] = useState({
    buyIn: 0,
    winnings: 0,
    profit: 0,
    roi: 0
  })
  const [gpp, setGpp] = useState(null)

  const classes = useStyles();

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
      const fiftyfifty = filteredDFSRes.filter((game) => {
        return (game.Entry.includes('50/50') && !game.Entry.includes('Max')) || game.Entry.includes('50-50')

      })
      // const filteredFifty = fiftyfifty.filter((game) => {
      //   return !game.Entry.includes('Max')
      // })

      const doubleUp = filteredDFSRes.filter((game) => {
        return game.Entry.includes('Double Up') 
      })

      const h2h = filteredDFSRes.filter((game) => {
        return game.Contest_Entries === 2
      })

      const gpp = filteredDFSRes.filter((game) => {
        return !(game.Entry.includes('50/50') && !game.Entry.includes('Max')) && !game.Entry.includes('50-50') && !game.Entry.includes('Double Up')

      })

      // Annoyingly... I'm still off 1 here

      const filteredGPP = gpp.filter((game) => {
        return game.Contest_Entries !== 2
      })
      // // First filteres out single Entry
      // const threeEntry = filteredDFSRes.filter((game) => {
      //   return game.Entry.includes('[3 Entry Max]') 
      // })
      // // second filters out 3 entry max
      // const theRest = filteredDFSRes.filter((game) => {
      //   return !game.Entry.includes('[3 Entry Max]')  && !game.Entry.includes('[Single Entry]') 
      // })
      console.log(fiftyfifty, doubleUp, h2h, filteredGPP)
      setH2h(summarizeData(h2h, 'H2H'))
      setFiftyFifth(summarizeData(fiftyfifty, '50/50'))
      setDoubleUp(summarizeData(doubleUp, 'Double Up'))
      setGpp(filteredGPP)
    } else {
      setH2h({
        buyIn: 0,
        winnings: 0,
        profit: 0,
        roi: 0
      })
      setFiftyFifth({
        buyIn: 0,
        winnings: 0,
        profit: 0,
        roi: 0
      })
      setDoubleUp({
        buyIn: 0,
        winnings: 0,
        profit: 0,
        roi: 0
      })
      setGpp(null)
    }

  }, [filteredDFSRes])
  

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Cash
        </Typography>
        
        <Typography variant="body2" component="div" >
          <SideCashTable className = {classes.table} gppData = {gpp} h2h = {h2h} doubleUp = {doubleUp} fiftyfifty = {fiftyfifty}/>
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          GPP
        </Typography>
        
        <Typography variant="body2" component="div" >
          <SideGppTable className = {classes.table} gppData = {gpp}/>
        </Typography>
      </CardContent>
      
    </Card>
  );
}

export default SideGameType