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

const YearOptions = () => {


  // loading in context

    const {dfsRes, updateDfsRes, setFilteredDFSRes, sportFilter, setSportFilter, yearFilter, setYearFilter, gameFilter} = useContext(DFSContext)


    // Material UI default settings
    const classes = useStyles();
    // const [sport, setSport] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const filterData = (sport, year, gameType) => {
    // const currentData = [...dfsRes].filter((game) => {
    //   return game.Contest_Date_EST.includes(year) && game.Sport.includes(sport) && game.Game_type.includes(gameType)})
    let currentData = [...dfsRes]

    if (sport !== '') {
      currentData = currentData.filter(game => game.Sport === sport)
    } 

    if (year !== '') {
      currentData = currentData.filter(game => game.Contest_Date_EST.includes(year))
    }

    if (gameType !== '') {
      currentData = currentData.filter(game => game.Game_Type === gameType)
    }
    return currentData



  }

  const handleChange = event => {
    setYearFilter(event.target.value);
    // console.log('sport', sportFilter, 'year', event.target.value, 'game', gameFilter)
    
    const myData = filterData(sportFilter,event.target.value, gameFilter )
    setFilteredDFSRes(myData)
    // filtering our data based on the inputs from the select
    // if (event.target.value === ""){
    //   setFilteredDFSRes(dfsRes)
    // //   this stuff is wrong bad logic
    // } else {

    // if(sportFilter === '') {          
    // // const currentData = [...dfsRes].filter((game) => {
    // //     return game.Contest_Date_EST.includes(event.target.value)
    // //     })
    // //     if(currentData.length > 0) {
    // //     setFilteredDFSRes(currentData)
    // //     } else {
    // //     // helps prevent app from crashing if we filter on a sport that doesn't exist
    // //     setFilteredDFSRes(null)

    // //     }

    // console.log('need to just filter dfsRes by the sport')
    // console.log(sportFilter)
    // } else {
    //     const currentData = [...dfsRes].filter((game) => {
    //         return game.Contest_Date_EST.includes(event.target.value) && game.Sport === sportFilter && game.Game_type === gameFilter
    //         })
    //         if(currentData.length > 0) {
    //         setFilteredDFSRes(currentData)
    //         } else {
    //         // helps prevent app from crashing if we filter on a sport that doesn't exist
    //         setFilteredDFSRes(null)
    //         }
    // }
    // }
  };





  return (
    <div>
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="year-select-label">
          Year
        </InputLabel>
        <Select
          labelId="year-select-label"
          id="year-select"
          value={yearFilter}
          onChange={handleChange}
          labelWidth={labelWidth}
          name={`Contest_Date_EST`}
        >
          <MenuItem value="" >
            <em>All</em>
          </MenuItem>
          <MenuItem value={`2020`} >2020</MenuItem>
          <MenuItem value={`2019`} >2019</MenuItem>
          <MenuItem value={`2018`} >2018</MenuItem>
          <MenuItem value={`2017`} >2017</MenuItem>
          <MenuItem value={`2016`} >2016</MenuItem>
        </Select>
      </FormControl>
      
      
    </div>
  );
}

export default YearOptions