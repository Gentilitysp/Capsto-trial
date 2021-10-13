const modal = document.getElementById('simpleModal');
const seePro = document.getElementById('seePro');
const closeBtn = document.getElementsByClassName('closeBtn')[0];

seePro.addEventListener('click', openModal);
function openModal(){
 modal.style.display = 'block';
console.log(123)
}

closeBtn.addEventListener('click',closeModal);
function closeModal(){
 modal.style.display = 'none';
}

window.addEventListener('click',outsideClick);
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}