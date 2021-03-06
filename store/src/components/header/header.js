import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
import SimpleCart from '../cart/cart';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  fullHeight: {
    height: "100%"
  },
 
}));


function Header() {

  const classes = useStyles();
  return (
    <>
     <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h1" color="inherit" noWrap className={classes.toolbarTitle}>
        Our Store
        </Typography>
        <nav>
        <SimpleCart />
          </nav>
          <Button href="#" color="default" variant="outlined" className={classes.link}>
            Login
          </Button>
        
      </Toolbar>
    </AppBar>
     
    </>
  )
}

export default Header;