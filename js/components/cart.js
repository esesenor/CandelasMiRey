function cart(db, printProducts){

    

    let cart = JSON.parse(localStorage.getItem('cart')) || []
//

    //Elementos DOM
    const productsDOM = document.querySelector('.products__container')
    const notifyDOM = document.querySelector('.notify')
    const cartDOM = document.querySelector('.cart__body')
    const countDOM = document.querySelector('.cart__count--item')
    const totalDOM = document.querySelector('.cart__total--item')
    const chekoutDOM = document.querySelector('.btn--buy')
    const darkModeDOM = document.querySelector('.btn--dark--store')

    function printCart(){
        let htmlCart = ''

        if(cart.length===0){
            htmlCart += `
            <div class="cart__empty">
            <i class="bx bx-cart"></i>
            <p class="cart__empty--text">
                Todavía no has cargado nada al carrgio, hacele en bombas de fuego ;)
            </p>`
   
            if (notifyDOM) notifyDOM.classList.remove('show--notify')
        }else{
           for(const item of cart){
                const product = db.find(p => p.id===item.id)
                htmlCart+=`
                <artticle class="article">
                    <div class="article__image">
                        <img src='${product.img}' alt='${product.name}' oncontextmenu="return false">
                    </div>
                    <div class="article__content">
                        <h4 class="article__title">${product.name}</h4>
                        <span class="article__price">$${product.price}</span>
                        <div class="article__quantity">

                            <button type="button" class="article__quantity article--minus" data-id='${product.id}'>
                                <i class="bx bx-minus"></i>
                            </button>

                            <span class="article__quantity--text">${item.qty}</span>

                            <button type="button" class="article__quantity article--plus" data-id='${product.id}'>
                                <i class="bx bx-plus"></i>
                            </button>
                            
                        </div>
                        <button type="button" class="article__quantity remove-from-cart" data-id='${product.id}'>
                            <i class="bx bx-trash"></i>
                        </button>
                    </div>
                </artticle>`
           }
        }

        if (cartDOM) cartDOM.innerHTML = htmlCart
        if (notifyDOM) notifyDOM.innerHTML = showItemsCount()
        if (countDOM) countDOM.innerHTML = showItemsCount()
        if (totalDOM) totalDOM.innerHTML = showTotal()

        localStorage.setItem('cart', JSON.stringify(cart))
    }

    function addToCart(id, qty=1){
        const itemFinded = cart.find(i=>i.id === id)
        if(itemFinded) {
            itemFinded.qty += qty
        }
        else{
            cart.push({id, qty})
        }
        printCart()
    }

    function removeFromCart(id, qty=1){
        const item = cart.find(p => p.id === id)
        const resul = item.qty-qty
        if(resul>0) {
            item.qty -= qty
        }
        else{
            cart = cart.filter(p => p.id !== id)
        }
        printCart()
    }


    function deleteFromCart(id){
        cart = cart.filter(i => i.id !== id)
        printCart()
    }

    function showItemsCount(){
        let suma = 0
        for(const item of cart){
            suma += item.qty
        }
        return suma
    }

    function showTotal(){
        let total = 0
        for(const item of cart){
            const productsFinded = db.find(p =>p.id===item.id)
            total += item.qty*productsFinded.price
        }
        return total
    }

    function checkout(){
        if(cart.length < 1){
            window.alert('No hay productos en el carrito: hechale!')
        }
        cart = []
        printCart()
        printProducts()
        window.alert('Compra realizada exitosamente. Gracias :)')
    }

    function validarStock(id){
        const productFinded = db.find(p => p.id === id)
        return productFinded.quantity>0
    }

    printCart()

    //EVENTOS

    productsDOM.addEventListener('click', function(e){
        if(e.target.closest('.add--to--cart')){
            const id = +e.target.closest('.add--to--cart').dataset.id
            const productFinded = db.find(p => p.id === id)
            if(validarStock(id)){
                addToCart(id)
                productFinded.quantity-=1
            }
            else{
                window.alert('Producto Agotado Temporalmente!')
            }
        }
    })

    cartDOM.addEventListener('click', function(e){
        if(e.target.closest('.article--minus')){
            const id = +e.target.closest('.article--minus').dataset.id
            removeFromCart(id)
        }
        if(e.target.closest('.article--plus')){
            const id = +e.target.closest('.article--plus').dataset.id
            addToCart(id)
        }
        if(e.target.closest('.remove-from-cart')){
            const id = +e.target.closest('.remove-from-cart').dataset.id
            deleteFromCart(id)
        }

    })

    chekoutDOM.addEventListener('click', function(){
        checkout()
    })


}


export default cart