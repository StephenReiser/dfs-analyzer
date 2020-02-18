import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './Card'

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
      <Grid container spacing={3}>
        
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
       
      </Grid>
    </div>
  );
}