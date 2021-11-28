

const url  = "https://raw.githubusercontent.com/andresGon/tita-test/main/images.json";


fetch("https://raw.githubusercontent.com/andresGon/tita-test/main/images.json")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    console.log(data)
  })
  .catch((err) => {
    // Do something for an error here
    console.log('error')
  })