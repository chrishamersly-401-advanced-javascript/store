import React from 'react';
// import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { category } from '../../store/products'



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
  console.log('categories map', props.categories)
  const classes = useStyles();
  
  return (
    <>
    {/* <h1>{props.activeCategorytoRender}</h1> */}
    <div className={classes.categories}>
      <Typography variant="h5"> Browse Our Categories: {props.category}</Typography>
      
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        {props.categories.map(cat =>
          <Button
            key={cat._id}
            color="primary"
            onClick={() => props.category(cat.name)}
          >
            {cat.displayName || cat.name}
          </Button>
        )}
      </ButtonGroup>
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.products.categories,
   
    
    
  }
}

const mapDispatchToProps = { category: category }


export default connect(mapStateToProps, mapDispatchToProps)(Categories)

