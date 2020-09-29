import React from 'react';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
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
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));




function Categories(props) {

  const classes = useStyles();
  
  return (
    <>
    <h1>{props.activeCategorytoRender}</h1>
    {/* //TODO map over the categories array and get all of the categories and render them.  */}
    {/* <a link href="">here:{props.activeCategorytoRender}</a>
    <a link href="">{props.activeCategorytoRender}</a> */}
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(state.products.categories)
  return {
    activeCategorytoRender: state.products.categories.name,
   
    
    
  }
}


export default connect(mapStateToProps)(Categories)

