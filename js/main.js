const inputText = document.getElementById('inputTextInsert');
const buttonAdd = document.getElementById('buttonAddElement');

let todoList = document.getElementById('todoListElement');

buttonAdd.addEventListener('click', function() {
  let contentValue = inputText.value;
  inputText.value = "";
  console.log(contentValue);
  todoList.innerHTML += '<li>'+contentValue+'<button class="btnEdit">Modification</button><button class="btnSuppr">Supprimer</button></li>';
  AddEventBtn();
});

function AddEventBtn() {
  let listBtnSuppr = document.getElementsByClassName('btnSuppr');
  let listBtnEdit = document.getElementsByClassName('btnEdit');
  
  for (let index = 0; index < listBtnSuppr.length; index++) {
    listBtnSuppr[index].removeEventListener('click');
    listBtnEdit[index].removeEventListener('click');

    listBtnSuppr[index].addEventListener('click', function(event) {
      event.target.parentElement.remove();
    }); 

    listBtnEdit[index].addEventListener('click', function(event) {
      EditEventBtn(event);
    }); 
  }
}

function EditEventBtn(event) {
  let temp = event.target.parentElement;
  console.log(temp);
  event.target.parentElement.innerHTML = '<input type="text" id="newValue"><button id="btnSave">Sauvegarder</button>'

  btnSave.addEventListener('click', function(){
    let newValueItem = document.getElementById('newValue').value;
    temp.innerHTML =  newValueItem+'<button class="btnEdit">Modification</button><button class="btnSuppr">Supprimer</button>';
    AddEventBtn();
  })
} 
