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




export default class Index extends Component {
  static async getInitialProps({ req, query }) {
    const user = req && req.session ? req.session.decodedToken : null
    // don't fetch anything from firebase if the user is not found
    // const snap = user && await req.firebaseServer.database().ref('messages').once('value')
    // const messages = snap && snap.val()
    const messages = null
    return { user, messages }
  }

  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      value: '',
      messages: this.props.messages,
    }

    this.addDbListener = this.addDbListener.bind(this)
    this.removeDbListener = this.removeDbListener.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(clientCredentials)
      }
    

    if (this.state.user) this.addDbListener()

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user })
        return user
          .getIdToken()
          .then(token => {
            // eslint-disable-next-line no-undef
            return fetch('/api/login', {
              method: 'POST',
              // eslint-disable-next-line no-undef
              headers: new Headers({ 'Content-Type': 'application/json' }),
              credentials: 'same-origin',
              body: JSON.stringify({ token }),
            })
          })
          .then(res => this.addDbListener())
      } else {
        this.setState({ user: null })
        // eslint-disable-next-line no-undef
        fetch('/api/logout', {
          method: 'POST',
          credentials: 'same-origin',
        }).then(() => this.removeDbListener())
      }
    })
  }

  addDbListener() {
    var db = firebase.firestore()
    let unsubscribe = db.collection('messages').onSnapshot(
      querySnapshot => {
        var messages = {}
        querySnapshot.forEach(function(doc) {
          messages[doc.id] = doc.data()
        })
        if (messages) this.setState({ messages })
      },
      error => {
        console.error(error)
      }
    )
    this.setState({ unsubscribe })
  }

  removeDbListener() {
    // firebase.database().ref('messages').off()
    if (this.state.unsubscribe) {
      this.state.unsubscribe()
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    var db = firebase.firestore()
    const date = new Date().getTime()
    console.log(this.state.user.email)
    const myObject = [{game: '1', value: 5}]
    db.collection('results')
      .doc(`${this.state.user.email}`)
      .set({
        // id: date,
        text: myObject,
      })
    this.setState({ value: '' })
    
  }

  handleLogin() {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

//   this was originmally set to signInWithPopup - looks like browswers can sometimes block these 

  handleLogout() {
    firebase.auth().signOut()
  }

  render() {
    const { user, value, messages } = this.state

    return (
      <div>
        {user ? (
          <button onClick={this.handleLogout}>Logout</button>
        ) : (
          <button onClick={this.handleLogin}>Login</button>
        )}
        <Layout>
        {user && (
          // <div>
          //   <form onSubmit={this.handleSubmit}>
          //     <input
          //       type={'text'}
          //       onChange={this.handleChange}
          //       placeholder={'add message...'}
          //       value={value}
          //     />
          //   </form>
          //   <ul>
          //     {messages &&
          //       Object.keys(messages).map(key => (
          //         <li key={key}>{messages[key].text}</li>
          //       ))}
          //   </ul>
            <>
              <Entry />
            <div>Hello</div>
            </>
          // </div>
        )}
</Layout>
        {/* so ultimately this can just be a giant component that can move up into the previous div - so it hidden unless we log in */}
        
      </div>
    )
  }
}



// will need to figure otu how sessions is working so other tabs can work correctly

// this seems to work fine - but i think the way to get this to work correctly is wrap all pages in a HOC or wrap _document in a HOC

