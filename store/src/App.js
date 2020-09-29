import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Products from './components/products/products';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import CurrentCategory from './components/categories/current-category.js';
import Categories from './components/categories/categories';



export default function App() {

  return (
    <>
    <CssBaseline />
    <Header />
    <main>
    <Categories />
    <CurrentCategory />
    <Products />
    </main>
    <Footer />
    </>
  )
}