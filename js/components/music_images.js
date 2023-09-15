const music_imagesDB = [
    {
        id:1,
        name: 'Vertigos de Ceniza',
        artista: 'Santiago Insane',
        img: './music_images/cenizas.jpg',
        punch_line: '...Soy un Rey invisible <br>de todo lo que no me pertenece <br>y lo que me quitaron...',
        link: 'https://www.youtube.com/watch?v=xtXPlyEOyCA'
    },
    {   
        id:2,
        name: 'Mi Renacimiento',
        artista: 'Kase.O',
        img: './music_images/renacimiento.jpg',
        punch_line: '...No es hacer, no es tener, es ser <br>Es amar, es crear, no es huir ni temer...',
        link: 'https://www.youtube.com/watch?v=4eCpDpZKUVs'
    },
    {
        id:3,
        name: 'Todos van pa´allá',
        artista: 'Aerophon',
        img: './music_images/todosvanpaalla.jpg',
        punch_line: '...No me muevo<br> Si no busco algo nuevo<br> Si no para que me juego en el juego...',
        link: 'https://www.youtube.com/watch?v=wjfmhNEdJjo'
    },
    {
        id:4,
        name: 'Hermético',
        artista: 'El Jose',
        img: './music_images/hermetico.jpg',
        punch_line: '...Buscar el truco men <br> Paque no falte la platica<br>No esperes recompensa, todos quieren su porción<br> Pocos meten si la situación se pone tensa<br>Vuelve y comienza...',
        link: 'https://www.youtube.com/watch?v=M2Jt6fYPEWw'
        
    },
    {
        id:5,
        name: 'Calaveras',
        artista: 'Noisferatu',
        img: './music_images/calaveras.jpg',
        punch_line: '...Hoy en una sola figura <br>soy el bueno, soy el malo, soy el feo <br>Soy la verdad, soy la mentira, soy la duda<br>  Hasta la sepultura llevaré mis ataduras...',
        link: 'https://www.youtube.com/watch?v=pudsYYjWAQ0'
    },
    {
        id:6,
        name: 'Ultrasornero',
        artista: 'Noisferatu',
        img: './music_images/ultrasornero.jpg',
        punch_line: '...Fluyendo limpio, sobre sonido sucio...',
        link: 'https://www.youtube.com/watch?v=--mEr-o2YUw'
    },
    {
        id:7,
        name: 'Rumbo a la nada',
        artista: 'Santiago Insane',
        img: './music_images/rumboalanada.jpg',
        punch_line: '..Demoniaco demencial o dimensional<br> Ningún adjetivo negativo me queda mal...',
        link: 'https://www.youtube.com/watch?v=uY1xE8njsOU'
    },
    {
        id:8,
        name: 'Luz',
        artista: 'Lil Supa',
        img: './music_images/luz.jpg',
        punch_line: '..Trasciende los planos reales, <br>vive sin barreras mentales <br>Olvida las cosas vanales <br>Que digan los tales y cuales...',
        link: 'https://www.youtube.com/watch?v=nHjOdiMuWiY'
    },
    {
        id:9,
        name: 'Moon Rock',
        artista: 'Kiño',
        img: './music_images/moonrock.jpg',
        punch_line: '...Me siento como cucaracha pero tal vez no es tan malo<br> Pues solo ellas quedarán cuando el de arriba decida todo acabarlo...',
        link: 'https://www.youtube.com/watch?v=nhvEDTiy7YI'
    }

]


function music_images(){
    /*JSON --> [...music_images]*/
    const db = music_imagesDB

    function print_music_images(){
        const music_imagesDOM = document.querySelector('.music_images__container')

        let html_music_image = ''
        for(let music_image of db){
            html_music_image += `
                <article class="music_images">
                    <div class="music_image__image">
                    <img src='${music_image.img}' alt='${music_image.name}' oncontextmenu="return false">
                    </div>
                    <div class="music_image__content">
                    <span class="music_image__punchline" >${music_image.punch_line}</span>
                    <a class="music_image_btn" href='${music_image.link}'> 
                        <i class='bx bxl-youtube'></i> 
                    </a>
                    <h3 class="music_image__title">Tema: ${music_image.name}</h3>
                    <span class="music_image__artista">Artista: ${music_image.artista}</span>
                    </div>
                </article>`
        }
        music_imagesDOM.innerHTML = html_music_image
    }
    print_music_images()
    return { 
        db, 
        print_music_images
    }
}


music_images()

