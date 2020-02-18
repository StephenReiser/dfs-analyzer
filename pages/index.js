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



const Index = () => {

  
  return(
    <>
    <Head>
        <title>DFS Analyzer</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <Link href="/about">
          <a>About Us</a>
        </Link>

    <Entry />
    </>
  )
}

export default Index


// Log in seems to be working - so now I deleted everything to make the "log in view'"