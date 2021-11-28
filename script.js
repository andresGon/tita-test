console.log('Hola mundo!')


const url  = "https://tita-test.netlify.app/images.json";

// conectar la data con el endpoint /todos
async function getItems(){
    try{
      let res = await fetch(url);
      return await res.json();
    }catch{
      console.log('error');
    }
  }

  let items = getItems();
  
  console.log(items);
 
// funcion para imprimir toda la lista
function printData(data){
  data.todos.forEach(
    function(element){
      const todo = new TodoItem(element);
      const html = todo.render();
      document.querySelector(".todo-list").innerHTML += html;
  })
};