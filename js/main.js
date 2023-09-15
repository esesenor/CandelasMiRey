// const express = require('express');
// const cors = require('cors');
// const app = express();

// Habilitar CORS para todas las rutas
// app.use(cors());


import showMenu from './components/showMenu.js'
import showCart from './components/showCart.js'
import products from './components/products.js'
import cart from './components/cart.js'
// import music_images from ./ 
//import getProducts from './helpers/getProducts.js';

// UI Elements
/* Ocultar Loader*/


showMenu()

showCart()


/***********************/

/*Pintar productos*/
//const {db, printProducts} = products//(await getProducts())

/* Carrito*/
const {db, printProducts} = products()

cart(db, printProducts)

