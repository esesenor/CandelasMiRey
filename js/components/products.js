


const productsDB = [
    {
        id:1,
        name: 'Colección X5un',
        price: 2.5,
        img: './images/pqt5.jpg',
        quantity: 1000,
        description: 'Llevá la colección x5 Mi Rey'
    },
    {
        id:2,
        name: 'Display X25un',
        price: 10,
        img: './images/display25.jpg',
        quantity: 1000,
        description: 'Precio de distribuidor Mi Rey'
    },
    {
        id:3,
        name: 'CAJA X 40display',
        price: 347,
        img: './images/display25.jpg',
        quantity: 1000,
        description: 'Precio de distribuidor Mi Rey'
    },
    {   
        id:4,
        name: 'Mi Rey "Billegas"',
        price: 0.5,
        img: './images/1.jpg',
        quantity: 600,
        description: 'Mi Rey contando el efecto',
    },
    {
        id:5,
        name: 'En Alfa',
        price: 0.5,
        img: './images/2.jpg',
        quantity: 5,
        description: 'Mi Rey en Alfa',
    },
    {
        id:6,
        name: 'Jabon Mi Rey',
        price: 0.5,
        img: './images/3.jpg',
        quantity: 400,
        description: 'Jabón pa´qe laves... las heridas'
    },
    {
        id:7,
        name: 'El Taxi Mi Rey',
        price: 0.5,
        img: './images/4.jpg',
        quantity: 400,
        description: 'Lana sube y lana baja'
    },
    {
        id:8,
        name: 'Araña Mi Rey',
        price: 0.5,
        img: './images/5.jpg',
        quantity: 400,
        description: 'Invadiendo rincones'
    }
]


function products(){
    /*JSON --> [...products]*/
    const db = JSON.parse(localStorage.getItem('db')) || productsDB

    function printProducts(){
        const productsDOM = document.querySelector('.products__container')

        let htmlProduct = ''
        for(let product of db){
            htmlProduct += `
                <article class="product">
                    <div class="product__image">
                    <img src='${product.img}' alt='${product.name}'>
                    </div>
                    <div class="product__content">
                    <button type="button" class="product__btn add--to--cart" data-id='${product.id}'>
                        <i class="bx bx-cart-add"></i>
                    </button>
                    <span class="product__price">$${product.price}</span>
                    <span class="product__stock">Disponibles: ${product.quantity}</span>
                    <h3 class="product__title">${product.name}</h3>
                    </div>
                </article>`
        }
        localStorage.setItem('db', JSON.stringify(db))
        if (productsDOM) productsDOM.innerHTML = htmlProduct
    }

    printProducts()
    return { 
        db, 
        printProducts
    }
}

    


export default products

