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

    const {dfsRes, updateDfsRes, setFilteredDFSRes, sportFilter, setSportFilter, yearFilter, gameFilter, setGameFilter} = useContext(DFSContext)


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
    setGameFilter(event.target.value);
    
    const myData = filterData(sportFilter,yearFilter, event.target.value )
    setFilteredDFSRes(myData)
    // filtering our data based on the inputs from the select

    // if (yearFilter === '' && sportFilter === '') {
    //   if (event.target.value === ""){
    //     setFilteredDFSRes(dfsRes)
    //   } else {
    //       const currentData = [...dfsRes].filter(game => game[event.target.name] === event.target.value)
    //         if(currentData.length > 0) {
    //           setFilteredDFSRes(currentData)
    //         } else {
    //           // helps prevent app from crashing if we filter on a sport that doesn't exist
    //           setFilteredDFSRes(null)
    //         }
    //   }

    // } else {
    //   if (event.target.value === ""){
    //     console.log('need to just filter dfsRes by the year')
    //     console.log(yearFilter)
    //     // so this is breaking... why????
    //     // console.log([...dfsRes])
    //     // const currentData = [...dfsRes].fitler(game => {
    //     //   game.Contest_Entry_EST.includes(yearFilter)
    //     // })
    //     // // const currentData = 1
    //     // if(currentData.length > 0) {
    //     //   setFilteredDFSRes(currentData)
    //     // } else {
    //     //   // helps prevent app from crashing if we filter on a sport that doesn't exist
    //     //   setFilteredDFSRes(null)
    //     // }
    //   } else {
    //     const currentData = [...dfsRes].filter((game) => {
    //       return game.Contest_Date_EST.includes(yearFilter) && game.Game_Type === event.target.value && game.Sport === sportFilter
    //       })
    //       if(currentData.length > 0) {
    //       setFilteredDFSRes(currentData)
    //       } else {
    //       // helps prevent app from crashing if we filter on a sport that doesn't exist
    //       setFilteredDFSRes(null)
    //       }
    //   }
    // }
    
  };




  return (
    <div>
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="game-type-label">
          Game Type
        </InputLabel>
        <Select
          labelId="game-type-label"
          id="game-type"
          value={gameFilter}
          onChange={handleChange}
          labelWidth={labelWidth}
          name={`Game_Type`}
        >
          <MenuItem value="" >
            <em>All</em>
          </MenuItem>
          <MenuItem value={`Classic`} >Classic</MenuItem>
          <MenuItem value={`Showdown Captain Mode`} >Showdown</MenuItem>
          
        </Select>
      </FormControl>
      
      
    </div>
  );
}