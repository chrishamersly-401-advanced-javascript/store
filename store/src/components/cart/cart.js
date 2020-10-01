import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  toolbarTitle: {
    flex: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));


function Cart(props) {
console.log('props', props.cartItems)
  const classes = useStyles();
  return (
    <>
    <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Cart({props.cartItems.length})
            </Link>
            {/* <h1>{props.initialPrice}</h1> */}
          </nav>
  
     
    </>
  )
}

const mapStateToProps = (state) => ({
  
    cartItems: state.cart.cartItems, 
    // initialPrice: state.cart.initialPrice  
  }
)



export default connect(mapStateToProps)(Cart);