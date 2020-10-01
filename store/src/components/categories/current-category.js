import React from 'react'
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

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

function CurrentCategory(props) {

  const classes = useStyles();

  return (
    // <h1> {props.activeCategory} </h1>

    <Container maxWidth="sm" component="main" className={classes.heroContent}>
    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
    {props.activeCategory}
    </Typography>
    <Typography variant="h5" align="center" color="textSecondary" component="p">
    {/* {props.activeCategoryDescription} */}
    </Typography>
  </Container>
  )
}






//the variable name. 
const mapStateToProps = (state) => {
  return {
    activeCategory: state.categories.activeCategory,
    activeCategoryDescription : state.categories.activeCategoryDescription
  }
}

export default connect(mapStateToProps)(CurrentCategory)


