import React, { useContext } from 'react'
import DFSContext from '../components/context/context'
import Link from 'next/link'


const About = () => {
    const {dfsRes, updateDfsRes} = useContext(DFSContext)
    return(
        <>

        <Link href='/'>
            <a>Home</a>
        </Link>
        <h1>{dfsRes}</h1>
        </>
    )
}

export default About