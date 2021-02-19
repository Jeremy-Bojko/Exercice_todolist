const inputText = document.getElementById('inputTextInsert');
const buttonAdd = document.getElementById('buttonAddElement');

let todoList = document.getElementById('todoListElement');

buttonAdd.addEventListener('click', function() {
  let contentValue = inputText.value; 
  console.log(contentValue);
  todoList.innerHTML += '<li>'+contentValue+'</li>';
});

