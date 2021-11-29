// este es el llamado del json que esta ubicado en github
const url  = "https://raw.githubusercontent.com/andresGon/tita-test/main/images.json";
const wrapMasonry = document.querySelector('.mansonry-wrap');


  async function fetchImagesJSON(){
    try{
      let response = await fetch(url);
      let images = await response.json();
      return images;
    }catch{
      console.log('ERROR');
    }
  }

// then para imprir las imagenes con las rutas desde el json
  fetchImagesJSON().then(images => {
    images.ImagesInner.forEach(element => {
      wrapMasonry.innerHTML += '<div class="mansonry-wImg"><img src="' + element.src +'"></div>'
    });
  });

// funcionalidad btn menu reponsive

const btnMenu = document.querySelector('.header-navMob');
const menu = document.querySelector('nav');
const body = document.querySelector('body');
const btnClose = document.querySelector('.btn-close');


btnMenu.addEventListener('click', function(){
  menu.classList.add('active');
  body.classList.add('no-scroll')
})

btnClose.addEventListener('click', function(){
  menu.classList.remove('active');
  body.classList.remove('no-scroll');
});
