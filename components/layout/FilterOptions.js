import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DFSContext from '../context/context'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {


  // loading in context

    const {dfsRes, updateDfsRes, setFilteredDFSRes} = useContext(DFSContext)


    // Material UI default settings
    const classes = useStyles();
    const [age, setAge] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setAge(event.target.value);
    
    // filtering our data based on the inputs from the select
    if (event.target.value === ""){
      setFilteredDFSRes(dfsRes)
    } else {
        const currentData = [...dfsRes].filter(game => game[event.target.name] === event.target.value)
          if(currentData.length > 0) {
            setFilteredDFSRes(currentData)
          } else {
            // helps prevent app from crashing if we filter on a sport that doesn't exist
            setFilteredDFSRes(null)
          }
    }
    
  };




  return (
    <div>
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="sport-select-label">
          Sport
        </InputLabel>
        <Select
          labelId="sport-select-label"
          id="sport-select"
          value={age}
          onChange={handleChange}
          labelWidth={labelWidth}
          name={`Sport`}
        >
          <MenuItem value="" >
            <em>All</em>
          </MenuItem>
          <MenuItem value={`NBA`} >NBA</MenuItem>
          <MenuItem value={`NFL`} >NFL</MenuItem>
          <MenuItem value={`MLB`} >MLB</MenuItem>
        </Select>
      </FormControl>
      
      
    </div>
  );
}