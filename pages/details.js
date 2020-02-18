import React, { useContext } from 'react'
import DFSContext from '../components/context/context'
import Layout from '../components/layout/Layout'
import NewTable from '../components/NewTable'

const Details = () => {
    const { filteredDFSRes } = useContext(DFSContext)
    return(
        <Layout title='details'>
            {filteredDFSRes ? 
            <h1>{filteredDFSRes[0].Sport}</h1> : null }
            {filteredDFSRes ? 
        <NewTable myDFSResults = {filteredDFSRes}/> : null }
        
        </Layout>
    )

}

export default Details