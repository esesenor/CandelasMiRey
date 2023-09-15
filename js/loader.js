function loader(){
    window.addEventListener('load', function(){
        const loaderr = document.querySelector('.loader')
        loaderr.classList.add('loader--hidden')
    })
}

loader()