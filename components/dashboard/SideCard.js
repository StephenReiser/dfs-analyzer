import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SideTable from './SideTable'
import FinishPosition from './SideTableFinishPositions'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // height:300
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

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.description}
        </Typography>
        <Typography variant="body2" component="div" >
          <SideTable className = {classes.table} topWinnings = {props.data}/>
        </Typography>
        {/* Finish Position */}
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {'Summary by Finish Position'}
        </Typography>
        <Typography variant="body2" component="div" >
          <FinishPosition className = {classes.table} topWinnings = {props.data}/>
        </Typography>
        
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

    
  );
}