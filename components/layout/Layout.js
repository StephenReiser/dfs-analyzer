import Link from 'next/link'
import Head from 'next/head'

import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DFSContext from '../context/context'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default ({ children, title = 'DFS Analyzer' }) => {
    const classes = useStyles();
    const {dfsRes} = useContext(DFSContext)
    return(
  <div>
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
    <header>
      <nav>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link href="/">
                <a>Home</a>
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link href="/about">
                <a>About</a>
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link href="/details">
                <a>Details</a>
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link href="/summary">
                <a>Summary</a>
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link href="/chart">
                <a>Chart</a>
            </Link>
          </Typography>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
      </nav>
    </header>

    {children}

    <footer>{dfsRes ? `DataLoaded` : `No DATA YET!`}</footer>
  </div>
)
    }



