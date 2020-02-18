import CsvUpload from './CsvUpload'
import React, { useState, useEffect, useContext } from 'react'
import Button from '@material-ui/core/Button';
import Table from './Table'
import NewTable from './NewTable'
import DFSContext from './context/context'
import Dashboard from './Dashboard'



const Entry = () => {
    const [myData, setMyData] = useState([]);

    const {dfsRes, updateDfsRes, filteredDFSRes, setFilteredDFSRes} = useContext(DFSContext)

    useEffect(() => {

        // console.log(myData)
        // console.log(dfsRes)
    }, [myData])

   

    return(
        <>
        <Button variant="contained" color="primary" onClick = {() => updateDfsRes('Test changing state')}>
            Hello World
        </Button>
        <CsvUpload setMyData = {updateDfsRes} setFilterData = {setFilteredDFSRes}/>
        <Dashboard />
        
</>
        
        
    )
}

export default Entry