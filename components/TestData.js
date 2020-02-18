import React, {useEffect, useContext} from 'react'
import sample from '../sample.js'
import DFSContext from '../components/context/context'



const TestData = (props) => {
    const {dfsRes, updateDfsRes, setFilteredDFSRes} = useContext(DFSContext)
    useEffect(() => {

        if (!dfsRes) {
        const data = sample
        
        const cleanData = props.convertToNumbers(data)

        updateDfsRes(cleanData)
        setFilteredDFSRes(cleanData)
        }
    }, [])
    return(
        <div>
            Sample Data Loaded
        </div>
    )
}

export default TestData