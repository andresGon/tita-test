// este es el llamado del json que esta ubicado en github
const url  = "https://raw.githubusercontent.com/andresGon/tita-test/main/images.json";
const wrapMasonry = document.querySelector('.mansonry-wrap');


  async function fetchImagesJSON(){
    try{
      let response = await fetch(url);
      let images = await response.json();
     // console.log(images);
      return images;
    }catch{
      console.log('ERROR');
    }
  }

  fetchImagesJSON().then(images => {
    //console.log(images.ImagesInner);
    images.ImagesInner.forEach(element => {
      wrapMasonry.innerHTML += '<div class="mansonry-wImg"><img src="' + element.src +'"></div>'
    });
  });