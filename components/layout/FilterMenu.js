import React, { useContext } from 'react'
import SportOptions from './SportOptions'
import YearOptions from './YearOptions'
import DFSContext from '../context/context'
import GameType from './GameType'



const FilterMenu = () => {

    const {dfsRes, updateDfsRes, setFilteredDFSRes} = useContext(DFSContext)
    // COuple things that make sense here is to set the value of the inputs somehow - they reset on each page change even though the value for filtered dfs res is changing
    return(
        <>
            <SportOptions />
            <YearOptions />
            <GameType />
        </>
    )
}

export default FilterMenu


// next steps are to add a year and then add in showdown/classic. probably worth later putting a filter for like Cash/GPP/H2H just to see the chart


// Not really related - but need to add in some fixes for the Cash/GPP summary since they look goofy with missing data