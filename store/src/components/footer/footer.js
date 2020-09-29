import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
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


function Footer() {

  const classes = useStyles();
  return (
   
     <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-around">

          {/* How do these 3 combine to make this a responsive grid? */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Column 1
            </Typography>
            <ul>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 1</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 2</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 3</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 4</Link> </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Column 2
            </Typography>
            <ul>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 1</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 2</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 3</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 4</Link> </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Column 3
            </Typography>
            <ul>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 1</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 2</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 3</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 4</Link> </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Column 4
            </Typography>
            <ul>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 1</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 2</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 3</Link> </li>
              <li> <Link href="#" variant="subtitle1" color="textSecondary">Item 4</Link> </li>
            </ul>
          </Grid>

        </Grid>
      </Container>
  )
}

export default Footer;

