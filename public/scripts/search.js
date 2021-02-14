const searchQ = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click', ()=> {
  alert(`${searchQ.value}`);
})