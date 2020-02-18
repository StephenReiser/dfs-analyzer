import React, { useContext } from 'react'
import DFSContext from '../components/context/context'
import Layout from '../components/layout/Layout'


// so this is a patter we can use to access global state - will need to update _app.js as well to create state and setters - tho as I see it, probably don't need more than jsut the full object

const About = () => {
    const {dfsRes, updateDfsRes} = useContext(DFSContext)
    return(
        

       <Layout title='about'>
            <h1>{dfsRes[0].Sport}</h1>
            <h1>ABOUT</h1>
        </Layout>
        
    )
}

export default About