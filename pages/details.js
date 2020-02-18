import React, { useContext } from 'react'
import DFSContext from '../components/context/context'
import Layout from '../components/layout/Layout'
import NewTable from '../components/NewTable'

const Details = () => {
    const {dfsRes, updateDfsRes} = useContext(DFSContext)
    return(
        <Layout title='details'>
            <h1>{dfsRes[0].Sport}</h1>
            {dfsRes ? 
        <NewTable myDFSResults = {dfsRes}/> : null }
        
        </Layout>
    )

}

export default Details