import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
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




function Products(props) {

  const classes = useStyles();

  return (
    <Container maxWidth="md" component="main">
    <Grid container spacing={5} alignItems="stretch">
      {/* why 3 specs here? on a small screen, use 12 grid spots, 6 on a small screen, 4 on medium+ */}
      {/* In other words, 1 accross, 2 accross, or 3 accross */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
            <CardMedia background-image="https://en.wikipedia.org/wiki/Mount_Rainier#/media/File:Mount_Rainier_from_west.jpg">
       
            </CardMedia>
          <CardContent> 

            <Typography variant="h5" color="textPrimary">
            {props.activeProduct}
            </Typography>
            <Typography variant="p" color="textSecondary">
            {props.activeProductDescription}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='outlined' color="primary" onClick="addToCart">ADD TO CART</Button>
          </CardActions>
        </Card>
      </Grid>

      {/* <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.fullHeight} elevation={0} />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.fullHeight} elevation={1} />
      </Grid> */}

    </Grid>
  </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    activeProduct: state.products.activeProduct,
    activeProductDescription:  state.products.activeProductDescription
    
  }
}

export default connect(mapStateToProps)(Products)