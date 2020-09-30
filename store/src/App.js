import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Products from './components/products/products';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import CurrentCategory from './components/categories/current-category';
import Categories from './components/categories/categories';
// import SimpleCart from './components/cart/cart';



export default function App() {

  return (
    <>
    <CssBaseline />
    <Header />
    {/* <SimpleCart /> */}
    <main>
    <Categories />
    <CurrentCategory />
    <Products />
    </main>
    <Footer />
    </>
  )
}