const iconoMenu = document.querySelector('#open-menu');
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => { 


    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'img/open-menu.png'){
        e.target.setAttribute('src','img/close-menu.png');
    }else{
    e.target.setAttribute('src','img/open-menu.png');
    }
});