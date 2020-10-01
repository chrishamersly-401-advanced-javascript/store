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
import  { addToCart } from '../../store/cart';
// import { viewDetails } from '../store/products';

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

    <>
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.products.map((product, i) => (
          <Grid item key={product.name} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={`https://source.unsplash.com/random?${product.name}`}
                title={product.name}
                
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography>
                  {product.description}
                </Typography>
                <Typography>
                <strong>{product.price}</strong>
                </Typography>
                <Typography>
                In Stock :{product.inventory}
                </Typography>
                
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => props.addToCart(product)}>
                  Add To Cart
                </Button>
                {/* <Button size="small" color="primary"onClick={() => props.viewDetails(product.name)}> */}
                  {/* View Details */}
                {/* </Button> */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </>
 
  )
}
// category association, name, description, price, inventory count

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    description: state.products.description,
    price: state.products.price,
    inventory: state.products.instock,
    category: state.products.category,
    // activeProductDescription:  state.products.activeProductDescription
    
  }
}

const mapDispatchToProps = { addToCart: addToCart, }

export default connect(mapStateToProps, mapDispatchToProps)(Products)