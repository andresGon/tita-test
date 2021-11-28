// este es el llamado del json que esta ubicado en github
const url  = "https://raw.githubusercontent.com/andresGon/tita-test/main/images.json";
const wrapMasonry = document.querySelector('.mansonry-wrap');

async function getJson(){
  try{
    let response = await fetch(url);
    let images = await response.json();
    console.log(images);
    return images;
  }catch{
    console.log(error);
  }
}

let imgList = getJson();
