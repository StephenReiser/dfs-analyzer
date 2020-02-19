import React, { useContext } from 'react'
import FilterOptions from './FilterOptions'
import DFSContext from '../context/context'



const FilterMenu = () => {

    const {dfsRes, updateDfsRes, setFilteredDFSRes} = useContext(DFSContext)
    // COuple things that make sense here is to set the value of the inputs somehow - they reset on each page change even though the value for filtered dfs res is changing
    return(
        <FilterOptions />
    )
}

export default FilterMenu