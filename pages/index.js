// for hot reloading and simplicity - I've moved the entire index here - this would replace the current Index

import React, { useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'isomorphic-unfetch'
import clientCredentials from '../credentials/client'
import Entry from '../components/Entry'
import { readString } from 'react-papaparse'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout/Layout'



const Index = () => {

  
  return(
    <>
    
    <Layout>
      <Entry />
    </Layout>
    </>
  )
}

export default Index


// Log in seems to be working - so now I deleted everything to make the "log in view'"