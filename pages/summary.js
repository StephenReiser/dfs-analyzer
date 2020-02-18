import React, { useContext } from 'react'
import DFSContext from '../components/context/context'
import Layout from '../components/layout/Layout'

const Summary = () => {
    const {dfsRes, updateDfsRes} = useContext(DFSContext)
    return(
        <Layout title='summary'>
            <h1>{dfsRes[0].Sport}</h1>
            <h1>SUMMARY</h1>
        </Layout>
    )

}

export default Summary