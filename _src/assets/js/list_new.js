'use strict';

const newListBtn = document.querySelector('#newlist-btn');
const newList = document.querySelector('#app-list');
const board = document.querySelector('#app-article');
const modal = document.querySelector('.modal-content');
const card = document.querySelector('.app-card');
const cardDel = document.querySelector('.p-1');
const deleteElem = document.querySelector('.deleteList');

let listArray = [newList];

console.log(listArray);


function addNewList () {
   let newElem = newList.cloneNode(true);
   board.appendChild(newElem);
   listArray.push(newElem);
   // const listArray = document.querySelectorAll('#app-list').forEach(list => array.push(list));

   const titleList =newElem.querySelector('.app-list-input');
   titleList.value = '';

   const titleCard = newElem.querySelector('.h6');
   const cardValue = newElem.querySelector('.app-edit-title');
   titleCard.innerHTML = cardValue;

   // let descripText = newList.querySelector('.app-edit-textarea');
   // descripText = 'hola';


   function createCard () {
      const listClon = newElem.querySelector('.p-1');
      const card = newElem.querySelector('.js-card');
      const button = newElem.querySelector('#add-btn');
      let cardClon = card.cloneNode(true);
      listClon.appendChild(cardClon);
      listClon.insertBefore(cardClon, button);
   }  
   
   newElem.querySelectorAll('.js-card, .js-edit-close').forEach(card => {
      card.addEventListener('click', toggleEdit);
   });

   newElem.querySelectorAll('#add-btn').forEach(btn => {
      btn.addEventListener('click', createCard)
   }) 
  

  
}


const toggleEdit = ev => {
   ev.stopPropagation();
   document.querySelector('.js-edit').classList.toggle('show');
   document.querySelector('.js-edit').classList.remove('d-none');
};

const preventEditClosing = ev => {
   ev.stopPropagation();
};



newListBtn.addEventListener('click', addNewList);
document.querySelector('.js-edit-modal').addEventListener('click', preventEditClosing);


