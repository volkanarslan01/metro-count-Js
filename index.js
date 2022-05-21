let buttonEvents = document.getElementById('count-el');
let count = 0;
let countEl = document.getElementById('count-el');
  function increment(){
    buttonEvents.textContent = count = count + 1;
 }
let saveEl = document.getElementById('save-el');
 function save() {

let countStr = count + ' - ';

saveEl.textContent += countStr 

count = 0;
countEl.textContent = 0;


  
 }
