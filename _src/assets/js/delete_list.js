'use strict';

// const array = document.querySelectorAll('#app-list');

// console.log(array);

const deleteElem = document.querySelector('.deleteList');
const cardDel = document.querySelector('.p-1');
const newList = document.querySelector('#app-list');

function deleteColumn() {
   let list = document.querySelector('#app-list');  
   list.removeChild(cardDel);

}


deleteElem.addEventListener('click', deleteColumn);