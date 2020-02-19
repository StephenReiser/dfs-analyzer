import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './Card'
import SideCard from './SideCard'
import ChartCard from './ChartCard'
import SideGameType from './SideGameType'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} >
        
        <Grid item xs={12} md={4} lg={3} sm={6}>
          {/* <Paper className={classes.paper}> */}
              <Card description = {'Total Buy-Ins'} data = {props.buyIn}/>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} md={4} lg={3} sm={6}>
          {/* <Paper className={classes.paper}> */}
              <Card description = {'Total Winnings'} data = {props.winnings}/>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} md={4} lg={3} sm={6}>
          {/* <Paper className={classes.paper}> */}
              <Card description = {'ROI %'} data = {props.roi}/>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} md={4} lg={3} sm={6}>
          {/* <Paper className={classes.paper}> */}
              <Card description = {'New Profit/Loss'} data = {props.profit}/>
          {/* </Paper> */}
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid container item xs={12} md={12} lg={3} sm={12} spacing={3}>
            {/* <Paper className={classes.paper}> */}
            <Grid item xs={12} md={6} sm = {6} lg={12}>
              <SideCard description = {'Top Wins'} data = {props.largestWins}/>
            </Grid>
            <Grid item xs={12} md={6} sm = {6} lg = {12} >
              <SideGameType description = {'Game Type'} />
            </Grid>
            {/* </Paper> */}
          </Grid>
          <Grid item xs={12} md={12} lg={9} sm={12} >
            {/* <Paper className={classes.paper}> */}
                <ChartCard description = {`Chart`} />
            {/* </Paper> */}
          </Grid>
        </Grid>
       
      </Grid>
    </div>
  );
}