// for hot reloading and simplicity - I've moved the entire index here - this would replace the current Index

import React, { useEffect, Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'isomorphic-unfetch'
import clientCredentials from '../credentials/client'
import Entry from '../components/Entry'
import { readString } from 'react-papaparse'
import Layout from '../components/layout/Layout'





const Index = () => {
  return(
    <Layout>
      <Entry />
    </Layout>
  )
}

export default Index




// Things to work on - more filters - for now I think year is the first one - can probable eventually add stuff like contest size or game type

// add in one more summary by game type - not sure what I can find here but H2H, small leagues (3-10) seem easy enough to figure out. Not sure if things have the word 'Double up' or whatever
