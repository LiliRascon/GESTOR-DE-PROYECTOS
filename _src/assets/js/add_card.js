'use strict';

const addCardBtn = document.querySelector('#add-btn');
const cardContainer = document.querySelector('.p-1');
const card = document.querySelector('.app-card');
const addBtn = document.querySelector('#add-btn')

function createCard () {

   let newCard = card.cloneNode(true);
   cardContainer.appendChild(newCard);
   cardContainer.insertBefore(newCard, addBtn); 

   document.querySelector('.js-card, .js-edit-close').addEventListener('click', toggleEdit);
    
   cardContainer.querySelectorAll('.js-card, .js-edit-close').forEach(item => {
      item.addEventListener('click', toggleEdit);
   });
}

const toggleEdit = ev => {
   ev.stopPropagation();
   document.querySelector('.js-edit').classList.toggle('show');
   document.querySelector('.js-edit').classList.remove('d-none');
};

const preventEditClosing = ev => {
   ev.stopPropagation();
};

addCardBtn.addEventListener('click', createCard);
document.querySelector('.js-edit-modal').addEventListener('click', preventEditClosing);
