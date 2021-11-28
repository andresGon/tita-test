// este es el llamado del json que esta ubicado en github
const url  = "https://raw.githubusercontent.com/andresGon/tita-test/main/images.json";
const wrapMasonry = document.querySelector('.mansonry-wrap');

/*
fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      response.json().then(function(data) {
        console.log(data);
        

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
  */

  async function getJson(){
    try{
      let response = await fetch(url);
      let images = await response.json();
      console.log(images);
      return images;
    }catch{
      console.log('ERROR');
    }
  }

 getJson();

