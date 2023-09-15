


const post_blogDB = [
    {
        id:1,
        name: 'No Copio',
        img: './blog/nocopio.jpg',
        descr: "Mural Barrio los Alcaceres"
    },
    {   
        id:2,
        name: 'No Copio',
        img: './blog/nocopio1.jpg',
        descr: '&#128640 Medellín 2022'
    },
    {   
        id:3,
        name: 'La Ultima Cena',
        img: './blog/stick1.jpg',
        descr: 'Sticker: La última cena'
    },
    {   
        id:4,
        name: 'No Copio',
        img: './blog/stick2.jpg',
        descr: 'Sticker: Fuma'
    },
    {   
        id:5,
        name: 'No Copio',
        img: './blog/stick3.jpg',
        descr: 'Sticker: Tag'
    },
    {   
        id:6,
        name: 'No Copio',
        img: './blog/stick5.png',
        descr: 'Sticker: Sucursal momento perfecto'
    },

    
    //"Laberintos que además de puertas<br>Cierra los caminos mismos<br>Solo mirar pa'dentro<br>Solución simple<br>Nadie libre quisiera un trono para sentar a otros"

]


function post_blog(){
    /*JSON --> [...post_blog]*/
    const db = post_blogDB

    function print_post_blog(){
        const post_blogDOM = document.querySelector('.post_blog__container')

        let html_post_blog = ''
        for(let post_blog of db){
            html_post_blog += `
                <article class="post_blog">
                    <div class="post_blog__image">
                    <img src='${post_blog.img}' alt='${post_blog.name}'>
                    </div>
                    <div class="post_blog__content">
                    <span class="post_blog__artista">${post_blog.descr}</span>
                    </div>
                </article>`
        }
        post_blogDOM.innerHTML = html_post_blog
    }
    print_post_blog()
    return { 
        db, 
        print_post_blog
    }
}

post_blog()

  