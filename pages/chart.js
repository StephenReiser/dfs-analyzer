import React, { useContext } from 'react'
import DFSContext from '../components/context/context'
import Layout from '../components/layout/Layout'

const Chart = () => {
    const {dfsRes, updateDfsRes} = useContext(DFSContext)
    return(
        <Layout title='chart'>
            <h1>{dfsRes[0].Sport}</h1>
            <h1>CHART</h1>
        </Layout>
    )

}

export default Chart