import React, {useState} from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import DFSContext from '../components/context/context'

export default class MyApp extends App {
  state = {
    dfsRes: 'Test'
  }
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  updateDfsRes = (someWord) => {
    console.log(someWord)
    this.setState({
      dfsRes: someWord
    });
  }
  render() {
    const { Component, pageProps } = this.props;


    

    return (
      <DFSContext.Provider value = {{dfsRes: this.state.dfsRes, updateDfsRes: this.updateDfsRes}}>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>

        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
        </DFSContext.Provider>
    );
  }
}
