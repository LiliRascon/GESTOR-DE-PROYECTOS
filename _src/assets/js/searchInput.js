'use strict';

const searchInput = document.querySelector('.app-header-search');
const cardTitle = document.querySelector('.app-edit-title');
const allCards = document.querySelectorAll('.app-card');

console.log(cardTitle.value);

function cardFilter () {
   
   if (searchInput.value.includes(cardTitle.value)) {
      console.log('hola');
   }
   console.log(searchInput.value);
}



searchInput.addEventListener('keyup', cardFilter);
