import React, {useState, useEffect} from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import DFSContext from '../components/context/context'



const MyFunctionalApp = ({children}) => {
  const [dfsRes, updateDfsRes] = useState(null)
  const [filteredDFSRes, setFilteredDFSRes] = useState(null)

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])

  return(
    <DFSContext.Provider value = {{dfsRes, updateDfsRes, filteredDFSRes, setFilteredDFSRes }}>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>

        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
        </DFSContext.Provider>

  )

}



// Essentially making this a functional component










export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return(
      <MyFunctionalApp>
           <Component {...pageProps} />
      </MyFunctionalApp>

    )
  }
}


// export default class MyApp extends App {
//   state = {
//     dfsRes: null,
//     filteredDFSRes: null,
//   }
//   componentDidMount() {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }

//   updateDfsRes = (anArray) => {
//     console.log(anArray)
//     this.setState({
//       dfsRes: anArray
//     });
//   }
//   setFilteredDFSRes = (anArray) => {
//     console.log(anArray)
//     this.setState({
//       filteredDFSRes: anArray
//     });

//   }
//   render() {
//     const { Component, pageProps } = this.props;


    

//     return (
//       <DFSContext.Provider value = {{dfsRes: this.state.dfsRes, updateDfsRes: this.updateDfsRes, filteredDFSRes: this.state.filteredDFSRes, setFilteredDFSRes: this.setFilteredDFSRes }}>
//         <Head>
//           <title>My page</title>
//           <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//         </Head>

//         <ThemeProvider theme={theme}>
//           {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//           <CssBaseline />
//           <Component {...pageProps} />
//         </ThemeProvider>
//         </DFSContext.Provider>
//     );
//   }
// }
