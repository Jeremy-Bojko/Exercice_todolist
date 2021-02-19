const inputText = document.getElementById('inputTextInsert');
const buttonAdd = document.getElementById('buttonAddElement');

let todoList = document.getElementById('todoListElement');

buttonAdd.addEventListener('click', function() {
  let contentValue = inputText.value;
  inputText.value = "";
  console.log(contentValue);
  todoList.innerHTML += '<li>'+contentValue+'<button class="btnSuppr">Supprimer</button></li>';
  AddEventSuppr();
});

function AddEventSuppr() {
  let listBtn = document.getElementsByClassName('btnSuppr');
  
  for (let index = 0; index < listBtn.length; index++) {
    listBtn[index].addEventListener('click', function(event) {
      event.target.parentElement.remove();
    })   
  }
}
